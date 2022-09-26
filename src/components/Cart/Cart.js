import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    //finding the total price from the cart array
    let totalPrice = 0;
    for(let product of cart){
        console.log(product.price)
        totalPrice = totalPrice + product.price;
    }

    //finding the shipping charge from the cart array
    let shippingCharge = 0;
    for(let product of cart){
        shippingCharge = shippingCharge + product.shipping;
    }

    //finding the total tax amount from the cart array
    let tax = 0;
    tax = parseFloat((totalPrice * 0.1).toFixed(2));
    //finding grand total
    const grandTotal = totalPrice + shippingCharge + tax;
    
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
                    <p className='font-bold'>${totalPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Total Shipping Charge:</p>
                    <p className='font-bold'>${shippingCharge}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Tax:</p>
                    <p className='font-bold'>${tax}</p>
                </div>
                <div className='border-b-2 border-slate-400'></div>
                <div className='flex justify-between mt-2 items-center'>
                    <p className='text-xl font-semibold'>Grand Total:</p>
                    <p className='text-xl font-semibold'>${grandTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;