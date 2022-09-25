import React from 'react';

const Product = (props) => {
    const {addToCartHandler} = props;
    const {img, name , price, seller, ratings} = props.product;
    return (
        <div className='h-[508px] border-[1px] rounded relative'>
            <div className='p-2'>
                <img src={img} alt=""  className='rounded'/>
                <div className='flex flex-col pt-3 justify-between h-[140px]'>
                    <div className='col'>
                        <p className='font-semibold'>{name}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div className='col mt-auto'>
                        <p>Manufacturer: {seller}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                </div>
            </div>
            <button onClick={()=> addToCartHandler()} class="bg-btn-color hover:bg-orange-400 text-black py-3 px-4 rounded-b absolute bottom-0 w-full">
                Add to cart
            </button>
        </div>
    );
};

export default Product;