import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (id) => {
        const rest = cart.filter(product => product._id !== id);
        setCart(rest);
        removeFromDb(id);
    }
    return (
        <div className='grid grid-cols-5'>
            <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5  lg:gap-8 p-5 lg:p-20 lg:px-40 order-2 lg:order-1">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    >
                    </ReviewItem>)
                }
                {
                    cart.length === 0 && <p className='text-slate-800  text-2xl'>No Item Found, please click <Link to='/' className='text-blue-700 hover:text-white hover:p-1 hover:bg-blue-700 border-b-4 border-blue-800'>here <FontAwesomeIcon icon={faUpRightFromSquare} /></Link> to shop now</p>
                }
            </div>
            <div className="products bg-cart-color col-span-5 lg:col-span-1 order-1 lg:order-2">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                        <button className=" bg-orange-500 hover:bg-orange-600 p-3 rounded-lg hover text-white flex justify-between w-full mt-5  items-center" >
                            <p>Proceed Shipping</p>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;

