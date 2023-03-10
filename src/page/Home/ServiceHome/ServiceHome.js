import React, { useEffect, useState } from 'react';
import CardHome from './CardHome';

const ServiceHome = () => {
    const [services, setServices] = useState([]);
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
                    services.map(service => <CardHome
                        key={service._id}
                        service={service}
                    ></CardHome>)
                }
            </div>
        </div>
    );
};

export default ServiceHome;