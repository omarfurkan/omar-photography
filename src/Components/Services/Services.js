import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-background text-white'>
            <div className='w-5/6 mx-auto' >
                <h1 className='text-center pt-24 text-4xl font-bold mb-4'>Our Service</h1>
                <p className='text-center w-2/6 mx-auto'>Service that makes your moment captured forever</p>
                <hr className='w-1/6 mx-auto mt-4 mb-8' />
                <div className='grid grid-cols-3 gap-12'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;