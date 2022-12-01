import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const imageHostKey = process.env.REACT_APP_imgbb_KEY;

const AddAProduct = () => {
    const categories = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const used = form.used.value;
        const sellPrice = form.sellPrice.value;
        const regularPrice = form.regularPrice.value;
        const category = form.category.value;
        const image = form.image.files[0];
        const salerName = form.salerName.value;

        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const product = {
                        salerName,
                        category,
                        sellPrice,
                        regularPrice,
                        location,
                        used,
                        photo: imageData.data.url,
                        name,
                        email: user?.email
                    }

                    fetch('https://resellerhub-server-assignment-12.vercel.app/add-a-product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Your Product Has Added Successfully');
                                navigate('/dashboard/my-products')
                            }
                            console.log(result)
                        })
                }
            })

    }



    return (
        <div >
            <div className="bg-indigo-50">
                <form onSubmit={handleSubmit} className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    <div className="bg-white shadow-lg rounded  md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Add Your Product
                        </p>
                        <div className="mt-6 w-full">
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Product Name{" "}
                            </label>
                            <input name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Product Name " required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="image" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Select Image{" "}
                            </label>
                            <br />
                            <input
                                className='mt-2 mb-5'
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Select Brand{" "}
                            </label>
                            <select name='category' id='category' className="select select-success w-full my-2" required>


                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category.name}
                                    >{category.name}</option>)
                                }

                            </select>
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="location" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Location{" "}
                            </label>
                            <input name='location' id="location" aria-labelledby="location" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Locaton " required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="used" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                How many years/months You Used?{" "}
                            </label>
                            <input name='used' id="used" aria-labelledby="used" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 1 year / 6 months " required />
                        </div>


                        <div className="mt-6 w-full">
                            <label htmlFor="sellPrice" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                sellPrice{" "}
                            </label>
                            <input name='Price' id="sellPrice" aria-labelledby="sellPrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Sell Price " required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="regularPrice" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                regularPrice{" "}
                            </label>
                            <input name='regularPrice' id="regularPrice" aria-labelledby="regularPrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Regular Price " required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="salerName" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Your Name{" "}
                            </label>
                            <input name='salerName' disabled defaultValue={user?.displayName} id="salerName" aria-labelledby="salerName" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="product name " required />
                        </div>


                        <input className='w-full btn btn-primary mt-10' type="submit" value="Submit" />

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAProduct;