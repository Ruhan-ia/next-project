"use client";
import Image from 'next/image';
import React from 'react';
import { useParams } from 'next/navigation';
import useMenu from '@/app/Component/Hooks/useMenu';

const CardDetails = () => {
    const [coffees, loading] = useMenu();
    const params = useParams();
    const { id } = params;

 

    if (loading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    if (!coffees.length) {
        return <div className="text-center py-8">Failed to load coffee data.</div>;
    }

    // Convert `id` to a number before comparing
    const singleCard = coffees.find((coffee) => coffee.id === Number(id));
    console.log('Single Card:', singleCard);

    if (!singleCard) {
        return <div className="text-center py-8">Coffee not found!</div>;
    }

    return (
      
        <div className="  card lg:card-side bg-base-100 shadow-sm">
        <div className="avatar">
  <div className="w-auto rounded-xl">
    <Image width={400} height={400} alt='coffee' src={singleCard.image} />
  </div>
</div>
        <div className="card-body">
          <h2 className="card-title">{singleCard.coffeeName}</h2>
          <p>Category:{singleCard.category}</p>
          <p>Price:${singleCard.price}</p>
          <p>Ratings:{singleCard.ratings}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
      
    );
};

export default CardDetails;