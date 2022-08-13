import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const QA = [
        {
            ques: 'Difference between authrization and authentication',
            ans: 'Authentication and authorization are two vital information security processes that adminstratiors use to protext systems and information. Authentication verifies the identity of a use or service and authorization determines their access rights.',
            img: 'https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?w=826&t=st=1660295747~exp=1660296347~hmac=22f3baac1047fa1ebdd8df5587e6baa20f8c971fdbcb70cf6c0cd9eec4ed7cc1'

        },
        {
            ques: 'Why are we using firebase? What other options do we have to implement authentication?',
            ans: 'We uses firebase for \n 1. Reliable and Extensive Datebase \n 2. Fast and Safe Hosting \n 3. Provides A Free Start To Newbies 4. Google Analytics \n 5. Firebase Cloud messaging for Cross-Platform \n 6.Free Multi-Platform Firebase Authentication  \n 7.Firebase Testing Sevices to Improve App Quality \n 8. Increment in Revenue with App Indexing API \n 9. Free Use of Firebase Dynamin Links \n 10. Machine Learning Capabilities \n The other options we do have to implement authentication like -  AuthO , MongoDB , Passport , Okta , Amazone Cognito , Keyclok , OAuth2 etc.',
            img: 'https://img.freepik.com/premium-photo/digital-cyberspace-data-network-connections_24070-1059.jpg?w=996'

        },
        {
            ques: 'What other services does firebas provide other than authentication',
            ans: 'Othe services that firebase does provides are as folllow \n Realtime Database \n Remote Config \n Firebase Extensions \bn App Check \n Cloud Function \n Cloud Messaging \n Hosting \n Cloud Storage \n Firebase ML (Machine learing)',
            img: 'https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?w=996&t=st=1660295795~exp=1660296395~hmac=ac7a5e4728c6914776b458bdfd65a9154b2bceaa9d4408607579c028b3514ce2'
        }

    ]
    return (
        <div className='my-background h-full pb-12'>
            <h1 className='text-center text-white text-4xl pt-8 pb-6 font-semibold'>Blog</h1>
            <hr className='h-4 w-12 mx-auto' />
            <div className='w-11/12 xl:w-5/6 mx-auto '>
                {
                    QA.map((blog, index) =>
                        <Blog
                            key={index}
                            blog={blog}
                        />)
                }
            </div>
        </div>
    );
};

export default Blogs;