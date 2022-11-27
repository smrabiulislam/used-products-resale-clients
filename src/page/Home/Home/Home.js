import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import ClientReview from '../ClientReview/ClientReview';
import Hero from '../Hero/Hero';
import MidHero from '../MidHero/MidHero';

const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <div className='mt-8 text-center '>
                <h1 className="text-2xl text-left font-bold title ">Top Categories</h1>
                <div className='grid justify-center m-auto justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 container mx-auto '>
                    {
                        categories.map(category => <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </div>
            <MidHero></MidHero>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;