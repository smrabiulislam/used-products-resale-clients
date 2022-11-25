import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../assets/img/hero.jpg'
import honda from '../../../assets/img/honda.jpg'
import royal from '../../../assets/img/royal-enfield.jpg'

const Brand = () => {
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold'>Popular Category</h2>
            <div className=" divider h-1/2 w-20 bg-orange-600"></div>
            <div className='pt-8 grid md:grid-cols-3 gap-2'>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <Link><img src={hero} /></Link>
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <Link><img src={honda} /></Link>
                </div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <Link><img src={royal} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Brand;