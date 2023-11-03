/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { price, img, title,_id } = service
    return (

     
           <div className="card w-96 bg-base-100 shadow-lg">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Price : ${price}</p>
                <div className="card-actions">
<Link to={`/checkout/${_id}`}>
<button className="btn bg-orange-600">Book now</button>

</Link>
                </div>
            </div>
        </div>


    );
};

export default ServicesCard;