import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='sticky top-0 p-10'>
            <p className='text-2xl font-bold'>Order Summary</p>
            <div className='mt-5 flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <p>Selected Items:</p>
                    <p className='font-bold'>{cart.length}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total Price:</p>
                    <p className='font-bold'>$0</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total Shipping Charge:</p>
                    <p className='font-bold'>$0</p>
                </div>
                <div className='flex justify-between'>
                    <p>Tax:</p>
                    <p className='font-bold'>$0</p>
                </div>
                <div className='border-b-2 border-slate-400'></div>
                <div className='flex justify-between mt-2 items-center'>
                    <p className='text-2xl font-semibold'>Grand Total:</p>
                    <p className='text-2xl font-semibold'>$0</p>
                </div>
                
            </div>
           
        </div>
    );
};

export default Cart;