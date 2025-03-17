import Link from 'next/link';
import React from 'react';
const getServices = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();
    return(data);
}
export const metadata = {
  title:{
    default:"services",  
    
  } ,
  description: "Create a coffee shop with next app",
};
const servicePage = async() => {
   
    const services = await getServices();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {services.map((service) => (
                <div key={service.id}>
                   <div className='card shadow-lg p-4'>
                   <h1>{service.title}</h1>
                   <p>{service.userId}</p>
                   <Link href={`/services/${service.id}`}>
                    <button className='btn-outline '>Details</button>
                   </Link>
                   </div>
                </div>
            ))}
        </div>
    );
};

export default servicePage;