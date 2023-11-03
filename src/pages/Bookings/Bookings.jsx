import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvides";
import BookingRow from "./BookingRow";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}` ,{withCredentials:true})
        .then(res=> setBookings(res.data))

        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [])
    console.log(bookings);

//     const handelBookingConfirm = (id) => {
//         fetch(`http://localhost:5000/bookings/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({status:'confirm'})
//         })
//             .then(res => res.json)
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
// // update state
//                 }
//             })

//     }

const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
}


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map(booking => <BookingRow key={booking._id}
                        handleBookingConfirm={handleBookingConfirm}
                            setBookings={setBookings} bookings={bookings } booking={booking}></BookingRow>)
                    }




                </tbody>


            </table>
        </div>
    );
};

export default Bookings;