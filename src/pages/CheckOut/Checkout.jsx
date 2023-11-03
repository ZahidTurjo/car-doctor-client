
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvides";


const Checkout = () => {
    const service = useLoaderData()
    const {title,_id,price,img}=service
    const {user}=useContext(AuthContext) 

    const handleBookService=e=>{
        e.preventDefault()
        const form=e.target;
        const name= form.name.value;
        const date=form.date.value;
        const email= user?.email;
   
   
        const booking={
            customerName:name,
            email,
            date,
            img,
            service:title,
            service_id:_id
        }
        console.log(booking);
         

    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
    body:JSON.stringify(booking)
    })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
        if(data.insertedId){
            alert('booked successfully')
        }
        })

    }

    return (
        <div>
           <h2 className="text-center text-3xl italic text-orange-600 font-bold">Book service:{title}</h2>
           <form onSubmit={handleBookService} className="card-body">
      <div className="flex flex-col lg:flex-row  gap-5">
      <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
         
        </div>
      </div> 

      <div className="flex flex-col lg:flex-row gap-5">
      <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={price} className="input input-bordered" required />
        
        </div>
      </div>
      <div>
        input:
      </div>
        <div className="form-control mt-6">
          <button className="btn btn-block">Login</button>
        </div>
      </form>
        </div>
    );
};

export default Checkout;