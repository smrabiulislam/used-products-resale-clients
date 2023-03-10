import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    const { data: myBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['myBuyers'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://resellerhub-server-assignment-12.vercel.app/my-orders/${user?.email}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>My Buyers</h2>

            {
                myBuyers.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>You Have not any Buyers</h2> :


                    <div className="overflow-x-auto w-5/6 mx-auto my-10">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>
                                        Avater
                                    </th>
                                    <th>
                                        Buyer Name

                                    </th>
                                    <th>Location</th>
                                    <th>Phone Number</th>


                                </tr>
                            </thead>
                            <tbody>


                                {
                                    myBuyers.map(order => <tr key={order._id}>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={order?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold">{order.buyername}</div>

                                            </div>
                                        </td>
                                        <td>
                                            {order.location}

                                        </td>
                                        <td>{order.phone}</td>

                                    </tr>)
                                }


                            </tbody>



                        </table>
                    </div>
            }
        </div>
    );
};

export default MyBuyers;