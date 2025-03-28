'use client';
import React from 'react';
import { useForm } from "react-hook-form"



const SubmissionForm = () => {
 
  const {
    register,
    handleSubmit,
   
   
  } = useForm()
  const img_hosting_key = process.env.NEXT_PUBLIC_img_hosting_key



  const onSubmit = async(data) =>{  
    console.log(data)
    try {
      const imageFile = data.image[0];
    const formData = new FormData();
    formData.append('image', imageFile);
   const res = await fetch(`https://api.imgbb.com/1/upload?key=${img_hosting_key}`, {
    method: 'POST',
    body: formData,
  
  })
  const result = await res.json();
  console.log(result.data.display_url);
  ;}
  catch (error) {
    console.error('Error uploading image:', error);
  }}
    
    
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Coffee Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
         {...register("coffeeName")} 
         type="text"  className='input input-neutral' 
         placeholder='coffeeName' />
        <select  {...register("category")}defaultValue="default" className="select select-ghost">
  <option value='default' disabled={true}>Pick a option</option>
  <option value="hot">Hot</option>
  <option value="cold">Cold</option>
  <option value="premier">Premier</option>
</select>
<input {...register("price")} type="number"  className='input input-neutral' placeholder='price' />
<input {...register("ratings")} type="number"  className='input input-neutral' placeholder='ratings' />
<input {...register("image")} type="file" className="file-input file-input-ghost" />
<input type="submit" value="submit" className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50' />
      </form>
    </div>
  );
};

export default SubmissionForm;