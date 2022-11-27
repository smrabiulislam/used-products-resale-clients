import React from 'react';

const CategoryCard = ({ category }) => {
    // console.log(category)
    const { name, img } = category;

    return (
        <div className=''>
            <div>
                <div className='p-4 shadow-xl shadow-indigo-300/50 rounded-lg '>
                    <img className='h-40 w-96' src={img} />
                    <h1 className='text-xl'>{name}</h1>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;