import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const SignUp = () => {
    const { providerLogin, updateUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photoURL = form.photoURL.value
        console.log(email, password, handleUpdateProfile);
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at leats two uppercase')
            return;
        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateProfile(name)
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setPasswordError(error.message);
            })

    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {

                console.log('Update USer Phofile')
            })
            .catch(error => {
                console.error('create user account error', error)
            })

    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                console.log(result.user);
                setError("");
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="">
            <div className=" card mx-auto my-4 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleRegister} className="card-body">
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
                    <div className=" w-full">

                    </div>
                    <div className="form-control">
                        <p className='text-red-600'>{passwordError}</p>
                        {success && <p>User Created Successfully</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-green-700" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
            </div>
        </div>

    );
};

export default SignUp;