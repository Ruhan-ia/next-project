'use client';

import Image from 'next/image';
import { images } from '../../../../public/data';
import Description from '../Description/Description';
import { useEffect, useState } from 'react';

const Banner =  () => {
    const [activeImg, setActiveImg] = useState(0)
    const clickNext = () => {
        activeImg === images.length - 1
        ?setActiveImg(0)
        :setActiveImg(activeImg +1)
    }
    const clickPrev = () => {
        activeImg === 0
        ?setActiveImg(images.length - 1)
        :setActiveImg(activeImg - 1)
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            clickNext();
        }, 5000)
        return () =>{
            clearTimeout(timer)
        }
    }, [activeImg])
    return (
        <div className="grid place-items-center mx-auto lg:grid-cols-2 w-auto shadow-2xl max-w-5xl rounded-2xl">
            <div className={`w-full flex justify-center items-center  transition-transform ease-in-out duration-500 rounded-2xl`}>
                {
                    images.map((ele, idx) => <div key={idx} className={`${idx === activeImg
                        ?'block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out'
                        :'hidden'
                    }`}>
                        <Image
                        src={ele.image}
                        width= {400}
                        height= {400} 
                        alt='coffee'
                        className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl '>
                        </Image>
                    </div>)
                }
            </div>
            <Description activeImgIndex={activeImg} clickPrev={clickPrev} clickNext={clickNext}></Description>

        </div>
    );
};

export default Banner;