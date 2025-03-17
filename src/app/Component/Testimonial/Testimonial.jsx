"use client"
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'normalize.css/normalize.css';
import { useEffect, useState } from 'react';

const Testimonial = () => {
    
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));

    }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    return (
        <div className="mt-20 w-full">
            <h1 className='text-4xl text-center font-bold'>Testimonials</h1>
            <div className="w-full max-w-7xl mx-auto px-4">        
             <Slider  {...settings}>
            
            {
                testimonials.map(testimonial => (
                    <div key={testimonial.name} >
                        <div className='shadow-lg p-5 rounded-lg   justify-items-center'>
                        <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <Image width={48} height={48} src={testimonial.photo} alt="poster"  />
                                </div>
                            </div>
                            <h1>{ testimonial.name}</h1>
                            <p>{testimonial.designation}</p>
                            <p>{testimonial.details}</p>
                        </div>
                
                    </div>
                ))}
            
          
          </Slider>
            
          </div>
        </div>
    );
};

export default Testimonial;