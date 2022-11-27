import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookModal = ({ carData, setCarData }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user
    const { name, sellPrice, photo } = carData;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellPrice = form.sellPrice.value;
        const buyername = form.buyername.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            buyername, photo, photoURL, name, sellPrice, email, phone, location
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your booking successfully!')
                    setCarData(null)
                    form.reset()
                }
            })
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" onClick={() => setCarData(null)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">${sellPrice}</h3> */}

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" readOnly defaultValue={name} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="sellPrice" type="text" readOnly defaultValue={sellPrice} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="buyername" type="text" readOnly defaultValue={displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" readOnly defaultValue={email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;