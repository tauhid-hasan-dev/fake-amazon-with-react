import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const {addToCartHandler, product} = props;
    const {img, name , price, seller, ratings} = product;
    return (
        <div className=' border-[1px] rounded relative'>
            <div className='p-2'>
                <img src={img} alt=""  className='rounded'/>
                <div className='flex flex-col pt-3  h-52 '>
                    <div >
                        <p className='font-semibold'>{name}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div className='mt-8'>
                        <p>Manufacturer: {seller}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                </div>
            </div>
            <button onClick={()=> addToCartHandler(product)} className="bg-btn-color hover:bg-orange-400 text-black py-3 px-4 rounded-b absolute bottom-0 w-full flex items-center justify-center gap-3">
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;