import React from 'react';
import { Link } from 'react-router-dom';

const MidHero = () => {
    return (
        <div className=' my-8 bg-cyan-400 py-32 px-8 rounded-md flex justify-around items-center'>
            <div>
                <h1 className='text-3xl font-bold text-Black'>Do You want to  <br />join as a <br /> Seller?</h1>
            </div>
            <div>
                <Link to='/signup'><button className="btn btn-warning">Register Now</button></Link>
            </div>
        </div>
    );
};

export default MidHero;