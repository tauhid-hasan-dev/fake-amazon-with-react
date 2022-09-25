import React from 'react';

const Shop = () => {
    return (
        <div className='grid grid-cols-5 '>
            <div className="products col-span-5 lg:col-span-4 ">
                <h1>This is products</h1>
            </div>
            <div className="products">
                <h1>This is sidebar</h1>
            </div>
        </div>
    );
};

export default Shop;