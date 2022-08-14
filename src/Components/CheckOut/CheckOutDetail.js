import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckOutDetail = (props) => {
    const { serviceId } = useParams();
    const { id, name, price, img, description } = props.service;
    const [name1, setName1] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');



    const handleName = e => {
        setName1(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleAdress = e => {
        setAddress(e.target.value)
    }
    const handleContact = e => {

        setContact(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        toast('Thank you for the booking.')
        setName1(e.target.name1.value = '')
        setName1(e.target.email.value = '')
        setName1(e.target.address.value = '')
        setName1(e.target.contact.value = '')
    }

    return (
        <div>
            <div className='w-5/6 mx-auto mt-10 mb-20' >
                {id == serviceId &&
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-40'>
                        <div className=' border-2 pb-2'>
                            <p className='text-white text-center'>logo</p>
                            <form onSubmit={handleSubmit} className='pt-8 px-2 md:px-8'>
                                <input onBlur={handleName} className='w-full mb-4 py-3 pl-4 text-lg' type="text" name="name1" id="" placeholder='Name' required />
                                <br />
                                <input onBlur={handleEmail} className='w-full mb-4 py-3 pl-4 text-lg' type="email" name="email" id="" placeholder='Email' required />
                                <br />
                                <input onBlur={handleAdress} className='w-full mb-4 py-3 pl-4 text-lg' type="text" name="address" id="" placeholder='Address' required />
                                <br />
                                <input onBlur={handleContact} className='w-full mb-4 py-3 pl-4 text-lg' type="number" name="contact" id="" placeholder='Contact No.' required />
                                <br />

                                <input className='w-full bg-white text-black font-bold py-3 font bold text-xl' type="submit" value="Submit" />
                            </form>
                        </div>

                        <div className='border-2 py-8 px-2 relative'>
                            <div className='text-center text-white absolute top-28 left-12 md:top-48 md:left-56 xl:top-48 xl:left-64'>
                                <p className='text-2xl font-bold'>{name}</p>
                                <p className='text-xl font-bold'>Price $ {price}</p>
                            </div>
                            <div className=''>
                                <img className='w-[530px] block mx-auto' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                }


            </div >
            <ToastContainer />
        </div >
    );
};

export default CheckOutDetail;