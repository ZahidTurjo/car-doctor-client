import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className="mt-20 mb-12">
            <div>


                <h2 className="text-3xl font-bold text-center text-orange-600">Our Services</h2>
                <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        services.map(service => <ServicesCard key={service._id} 
                            
                            service={service}></ServicesCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;