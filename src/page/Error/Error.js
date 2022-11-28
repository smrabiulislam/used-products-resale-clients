import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/img/Screenshot_62.png'

const Error = () => {
    return (
        <div className='py-12 text-center'>
            <img className='mx-auto pb-8 rounded-lg shadow-2xl' src={error} alt="" />
            <div>
                <Link to='/'><button className="btn btn-outline mt-5">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;
