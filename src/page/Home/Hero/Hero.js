import React from 'react';
import bgimg from '../../../assets/img/jawa car3.jpg'

const Hero = () => {
    return (
        <div className="hero py-40 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bgimg} className="max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Do you want to buy a bike?</h1>
                    <p className="py-6">You are the right place. You can get it here.If you want, you can buy or sell bikes from us here.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;