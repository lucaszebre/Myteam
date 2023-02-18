import React from 'react'
import Image from 'next/image'
const CardCenterAbout = (props) => {
    return (
        <div className='bg-DarkGreen flex flex-col  items-center h-[250px] lg:w-[30%] md:w-[90%] w-full mb-[2rem] md:mb-[4rem] pt-[2rem]'>
            <Image className=" content-center rounded-full border-white border-[1px]" src={props.avatar} width="96" height="96" alt={props.name}/>
            <h1 className='text-center text-rupture lg:font-xl z-10 mb-4 font-extrabold'>{props.name}</h1>
            <h2 className='text-center text-white lg:font-xl z-10 mb-4 font-bold' >{props.job}</h2>
            <div className='cursor-pointer p-[20px] rounded-full bg-corla hover:bg-rupture'><Image   src={"/assets/icon-cross.svg"} alt="croix-svg" width="16" height="16"/></div>
        </div>
    )
    }

export default CardCenterAbout
