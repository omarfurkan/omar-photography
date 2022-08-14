import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import CheckOutDetail from './CheckOutDetail';


const CheckOut = () => {

    const info = [
        {
            id: 101,
            name: "Commercial Photography",
            img: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            price: 183,
            description: "Commercial phtograph or advertising phtograph shoots for your business and othe stuff to promote and get high marketing value of your business or product with care and support"
        },
        {
            id: 102,
            name: "Event Photography",
            img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            price: 183,
            description: "This service provides the shoot of any wedding ceremony, birthday party, get-togather , business affairs or any events that you are gonna celebrate"
        },
        {
            id: 103,
            name: "Lifestyle Photography",
            img: "https://images.unsplash.com/photo-1612242879330-cd06b2696e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            price: 183,
            description: "Service that you need for your personal influence and get more popular in social media or any other  platform and make yourself Brand"
        }
    ]


    const { serviceId } = useParams();
    const [services, setServices] = useState([]);




    useEffect(() => {
        setServices(info)
    }, [])


    return (
        <div className='my-background h-full'>
            <h1 className='text-center text-white text-2xl pt-8'>CheckOut id: {serviceId}</h1>
            {services.map(service =>
                <CheckOutDetail
                    key={service.id}
                    service={service} />
            )}
            <Footer />
        </div>
    );
};

export default CheckOut;