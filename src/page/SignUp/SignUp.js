import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // const { createUser } = useContext(AuthContext);
    // const handleSignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(err => console.error(err));
    // }

    return (
        <div className="">
            <div className=" card mx-auto my-4 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form /**onSubmit={handleRegister} */ className="card-body">
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
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className=" w-full">
                        <label htmlFor="photoURL" className=" text-left text-sm font-medium leading-none text-gray-800">
                            {" "}
                            Photo URL{" "}
                        </label>
                        <input name='photoURL' id="photoURL" aria-labelledby="photoURL" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder=" jpg,jpeg,png etc" required />
                    </div>
                    {/* <div className="form-control">
                            <p className='text-red-600'>{passwordError}</p>
                            {success && <p>User Created Successfully</p>}
                        </div> */}
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