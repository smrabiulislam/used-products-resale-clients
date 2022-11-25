import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const SignUp = () => {
    const { signInWithGoogle, updateUserProfile } = useContext(AuthContext);
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
        console.log(email, password, /**handleUpdateProfile */);
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at leats two uppercase')
            return;
        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // handleUpdateProfile(name)
                setSuccess(true);
                form.reset();
                navigate("/")
            })
            .catch(error => {
                console.error('error', error);
                setPasswordError(error.message);
            })

    }

    // const handleUpdateProfile = (name, photoURL) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL
    //     }

    //     updateUserProfile(profile)
    //         .then(() => {

    //             console.log('Update USer Phofile')
    //         })
    //         .catch(error => {
    //             console.error('create user account error', error)
    //         })

    // }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
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
        <div className="my-8">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Image</span>
                        </label>
                        <input type="file" name="image" />
                    </div>
                    <div className="form-control">
                        <p className='text-red-600'>{passwordError}</p>
                        {success && <p>User Created Successfully</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-green-700" type="submit" value="Sign Up" />
                    </div>
                </form>
                <div className='mx-8'>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleSignIn}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Sign Up with Google</p>
                    </button>
                </div>
            </div>
        </div >

    );
};

export default SignUp;