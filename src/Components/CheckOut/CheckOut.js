import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1>CheckOut{serviceId}</h1>
            {/* {services.map(service =>
                <CheckOutDetail service={service} />
            )} */}
        </div>
    );
};

export default CheckOut;