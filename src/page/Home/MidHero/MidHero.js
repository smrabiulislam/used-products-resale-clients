import React from 'react';

const MidHero = () => {
    return (
        <div className=' my-8 bg-cyan-400 py-32 px-8 rounded-md flex justify-around items-center'>
            <div>
                <h1 className='text-3xl font-bold text-Black'>Do You want to  <br />join as a <br /> Seller?</h1>
            </div>
            <div>
                <button className="btn btn-warning">Register Now</button>
            </div>
        </div>
    );
};

export default MidHero;