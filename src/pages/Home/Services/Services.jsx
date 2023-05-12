import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='text-center space-y-4 mb-4'>
            <h4 className='text-orange-600 font-semibold text-xl'>Service</h4>
                <h2 className='text-3xl font-bold'>Our Service Area</h2>
                <p className='w-2/3 mx-auto'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Dont Look Even Slightly Believable</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        services.map(service=><ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                    }
                </div>
        </div>
    );
};

export default Services;