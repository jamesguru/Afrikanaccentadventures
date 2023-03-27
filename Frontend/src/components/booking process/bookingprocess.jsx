import React from 'react';
import './bookingprocess.css'

const bookingprocess = () => {
  return (
    <div className='booking-process'>

        <h2 className="booking-header">Booking process</h2>

        <div className="process">

            <div className="process-item">

                <h3>1. Book with us.</h3>
                <img src="gif/booking.gif" alt="" />

            </div>

            <div className="process-item">

                <h3>2. Get a call from us.</h3>
                <img src="gif/call.gif" alt="" />

            </div>

            <div className="process-item">

                <h3>3. Travel with us.</h3>
                <img src="gif/travel.gif" alt="" />

            </div>
        </div>


    </div>
  )
}

export default bookingprocess