import React from 'react';

const ProductCard = ({ service, setOrder }) => {
    const { img, price, title, sellerName, location, used } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="">{sellerName}</p>
                <h2 className="card-name text-xl">{title}</h2>
                <p className="">Location: {location}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-start">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setOrder(service)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;