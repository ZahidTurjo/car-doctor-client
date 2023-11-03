/* eslint-disable react/prop-types */


const BookingRow = ({booking,setBookings,bookings,handleBookingConfirm}) => {
    const{img,service,customerName,date,_id,status
    }=booking

    const handleDelete = (id)=>{
        const proced= confirm('Are u sure to delete this item')
        if(proced){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE',
            })
            .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount){
                alert('successfully deleted')
                const remainig= bookings.filter(booked=> booked._id !== id)
                setBookings(remainig)
            }
        })
        }
    }

    return (
        <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-lg w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
             
            </div>
          </div>
        </td>
        <td>
        <div className="text-xl font-bold">{service}</div>
        </td>
    <td>{date}</td>
        <th>
        {
            status ?   <button className="btn btn-ghost btn-xs">Confirmed</button>
            :
            <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
        }
        </th>
      </tr>
    );
};

export default BookingRow;