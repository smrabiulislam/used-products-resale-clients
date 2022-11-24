import React from 'react';
import hero from '../../../assets/img/hero.jpg'
import honda from '../../../assets/img/honda.jpg'
import royal from '../../../assets/img/royal-enfield.jpg'
import tvs from '../../../assets/img/tvs.jpg'
import yamaha from '../../../assets/img/yamaha.jpg'
import jawa from '../../../assets/img/jawa-motorcycles.jpg'

const Brand = () => {
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold'>Popular Brands</h2>
            <div className="divider w-20 "></div>
            <div className='grid md:grid-cols-6 sm:grid-cols-3 gap-2'>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img src={hero} />
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img src={honda} />
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img src={royal} />
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img src={tvs} />
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img src={yamaha} />
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img src={jawa} />
                </div>
            </div>
        </div>
    );
};

export default Brand;