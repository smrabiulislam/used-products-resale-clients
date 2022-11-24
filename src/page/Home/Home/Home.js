import React from 'react';
import Brand from '../Brand/Brand';
import ClientReview from '../ClientReview/ClientReview';
import Hero from '../Hero/Hero';
import MidHero from '../MidHero/MidHero';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Brand></Brand>
            <ServiceHome></ServiceHome>
            <MidHero></MidHero>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;