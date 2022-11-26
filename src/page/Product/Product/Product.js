import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    const [services, setServices] = useState([]);
    const [order, setOrder] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-4'>
            <div className='text-left py-8'>
                <p className="text-2xl font-bold text-black">Latest Product</p>
                <div className="divider h-1/2 w-20 bg-orange-600"></div>
            </div>
            <div className='pt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ProductCard
                        key={service._id}
                        service={service}
                        setOrder={setOrder}
                    ></ProductCard>)
                }
            </div>
            {
                order &&
                <BookingModal
                    order={order}
                ></BookingModal>
            }
        </div>
    );
};

export default Product;