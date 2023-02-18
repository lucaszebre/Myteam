import React from 'react'
import Image from 'next/image'
const CardBottom = (props) => {
    return (
        <div className='relative flex flex-col justify-center content-center place-content-center items-center p-1 lg:mt-0 mt-[5em]'>
            <Image className="absolute top-[-1.5rem] -z-7" src={"/assets/icon-quotes.svg"} width="67" height="57" />
            <div className='flex text-center items-center w-full text-white font-base z-10 font-extrabold text-xl mb-2'>
                {props.description}
            </div>
            <div className='text-center text-rupture lg:font-xl z-10 mb-4 font-extrabold'>
                {props.name}
            </div>
            <div className='text-center text-white lg:font-xl z-10 mb-4 font-bold'>
                {props.position}
                </div>
                <Image className=" content-center rounded-full border-white border-[1px]" src={props.avatar} width="62" height="62" alt='avatar'/>
        </div>
    )
}

export default CardBottom
