import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, quantity, price, shipping, img, _id } = product;
    return (
        <div className='flex  border-2 gap-5 rounded-lg p-2'>
            <div className='w-28 lg:w-36'>
                <img src={img} alt="" />
            </div>
            <div className='flex   items-center justify-between w-full'>
                <div>
                    <p className='text-sm lg:text-2xl font-semibold'>{name}</p>
                    <p className='text-sm lg:text-lg'>Price: ${price}</p>
                    <p className='text-sm lg:text-lg'>Shipping Charge: ${shipping}</p>
                    <p className='text-sm lg:text-lg'>Quantity: {quantity}</p>
                </div>
                <div className='text-2xl lg:text-5xl  text-red-500  hover:text-red-700 cursor-pointer  p-2 lg:p-5 ' onClick={() => handleRemoveItem(_id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;