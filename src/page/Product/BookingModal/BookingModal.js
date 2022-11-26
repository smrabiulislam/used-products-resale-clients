import React from 'react';

const BookingModal = ({ service }) => {

    console.log(service)
    const { title, price } = service;

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <h3 className="text-lg font-bold">${price}</h3>

                    <form /**onSubmit={handleBooking} */ className='grid grid-cols-1 gap-3 mt-10'>
                        {/* <input type="text" disabled value={date}  className="input w-full input-bordered " /> */}
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;