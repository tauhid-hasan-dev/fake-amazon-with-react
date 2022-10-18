import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    //add product to cart
    const addToCartHandler = (product) =>{
        //do not do this: cart.push(product) (its not good for diff algorithm)
        const selected = cart.find(p => p.id === product.id)
        const rest = cart.filter(p => p.id !== product.id);
        let newCart;
        if(!selected){
            product.quantity = 1;
            newCart = [...cart, product]
        }else{
            selected.quantity = selected.quantity + 1;
            newCart = [...rest, selected]
        }
        setCart(newCart);
        addToDb(product.id); 
    }


    useEffect(()=>{
        const storedData = getStoredCart();
        const newSavedCart = []
        for(const id in storedData){
            //finding the product by id from products data to be displayed in th UI
            const addedProduct = products.find(product => product.id === id)
            //set the quantity from local storage to displaye object
            if(addedProduct){
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                //after updating quantity property pushing the object to the new empty array
                newSavedCart.push(addedProduct);
            }
        }
    //changing the previous cart and setting new cart to previous cart
    setCart(newSavedCart)

    },[products])

    return (
        <div className='grid grid-cols-5'>
            <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
                {
                    products.map(product => <Product 
                                                    key={product.id} 
                                                    product={product} 
                                                    addToCartHandler = {addToCartHandler}>
                                            </Product>)
                }
            </div>
            <div className="products bg-cart-color">
                <Cart cart={cart} clearCart={clearCart}>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Shop;