import React from 'react';
const getSingleServices = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const data = await res.json();
    return(data);
}
export async function generateMetadata(
    { params})
    {
    // read route params
    const { id } = await params
   
    // fetch data
    const product = await getSingleServices(id)
   
   
   
    return {
      title: product.title,
    
    }
}
const singleService = async({params}) => {
    const {id} =await params;
    const singleService = await getSingleServices(id);
    return (
        <div>
            <h1>{singleService.title}</h1>
            <p>{singleService.userId}</p>
            <p>{singleService.id}</p>
        </div>
    );
};

export default singleService;