import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="">
            <div className=" card mx-auto my-4 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign In</h1>
                <form /**onSubmit={handleRegister} */ className="card-body">

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
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                    </div>

                    {/* <div className="form-control">
                            <p className='text-red-600'>{passwordError}</p>
                            {success && <p>User Created Successfully</p>}
                        </div> */}
                    <div className="form-control mt-6">
                        <input className="btn bg-green-700" type="submit" value="Sign In" />
                    </div>
                </form>
                <p className='text-center'>Don't have any account? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    );
};

export default SignIn;