import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

/*

To make pagination we need: 

Total Product count: loaded;
Per page product count: 10;
number of page: total product count/ Per page product count
current page(we need to load data according to the page numbers);

 */

const Shop = () => {
    //const { products, count } = useLoaderData();//total product (count)
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);  //page number
    const [size, setSize] = useState(10);  //product per page

    useEffect(() => {
        const url = `https://fake-amazon-server-side.vercel.app/products?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
    }, [])
    const pages = Math.ceil(count / size);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    //add product to cart
    const addToCartHandler = (product) => {
        //do not do this: cart.push(product) (its not good for diff algorithm)
        const selected = cart.find(p => p._id === product._id)
        const rest = cart.filter(p => p._id !== product._id);
        let newCart;
        if (!selected) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            selected.quantity = selected.quantity + 1;
            newCart = [...rest, selected]
        }
        setCart(newCart);
        addToDb(product._id);
    }


    useEffect(() => {
        const storedData = getStoredCart();
        const newSavedCart = []
        for (const id in storedData) {
            //finding the product by id from products data to be displayed in th UI
            const addedProduct = products.find(product => product._id === id)
            //set the quantity from local storage to displaye object
            if (addedProduct) {
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                //after updating quantity property pushing the object to the new empty array
                newSavedCart.push(addedProduct);
            }
        }
        //changing the previous cart and setting new cart to previous cart
        setCart(newSavedCart)

    }, [products])

    return (
        <div>
            <div className='grid grid-cols-5'>
                <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            addToCartHandler={addToCartHandler}>
                        </Product>)
                    }
                </div>
                <div className="products bg-cart-color">
                    <Cart cart={cart} clearCart={clearCart}>
                        <Link to='/orders'>
                            <button className=" bg-orange-500 hover:bg-orange-600 p-3 rounded-lg hover text-white flex justify-between w-full mt-5  items-center" >
                                <p>Review Orders</p>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <div className='text-center'>
                <p className='text-3xl mb-5'>Currently selected page:{page} and size:{size}</p>
                <div className='text-center flex justify-center gap-1 mb-5'>

                    {
                        [...Array(pages).keys()].map(number => {
                            return <div key={number}

                                className="btn-group">
                                <button onClick={() => setPage(number)} className={`btn btn-md rounded ${page === number && 'bg-orange-600 px-6 hover:bg-orange-600 border-orange-600'}`} >{number}</button>
                            </div>
                        }
                        )
                    }
                    <select onChange={(event) => setSize(event.target.value)} className="select select-bordered w-[100px] ">
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>


            </div>

        </div>

    );
};

export default Shop;