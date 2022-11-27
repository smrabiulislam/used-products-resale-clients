import { getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const SignUp = () => {
    const location = useLocation();
    const form = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser, setLoading, updateUserProfile } = useContext(AuthContext);
    const [checked, setChecked] = useState(false);


    const imageHostKey = process.env.REACT_APP_imgbb_KEY;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const check = form.check.checked;

        setChecked(current => !current);

        const formData = new FormData()
        formData.append('image', image)

        const url =
            `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const userInfo = {
                        displayName: name,
                        photoURL: imageData.data.url,
                        email,
                        check
                    }

                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${name} is Added Successfully`);
                                navigate('/')
                            }
                        })
                }

                createUser(email, password)
                    .then(result => {
                        setError('');
                        updateUserProfile(name, imageData.data.url)
                            .then(() => {
                                form.reset();
                                navigate(form, { replace: true })
                                navigate('/')
                            })
                            .catch(error => setError(error.message))
                    })
                    .catch(error => {
                        console.error('create user account error', error)
                        setError(error.message);
                        setLoading(false)
                    })

            })
            .catch(err => {
                toast.error(err.message)
            })

    }
    return (
        <div className="my-8">
            <div className=" card mx-auto my-4 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>

                    <div className="form-control my-5">
                        <label className="label cursor-pointer justify-start">
                            <input
                                name="check"
                                type="checkbox"
                                value={checked}
                                className="checkbox"
                            />
                            <span className="ml-5">
                                I want to be a seller.
                            </span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Image</span>
                        </label>
                        <input type="file" name="image" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-green-700" type="submit" value="Sign Up" />
                    </div>
                </form>
                <div className='mx-8'>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div >

    );
};

export default SignUp;