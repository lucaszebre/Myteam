import React from 'react'
import Image from 'next/image'
const CardCenterHome = (props) => {
    return (
    <>
        <div className='flex md:flex-row  flex-col content-center  items-center place-content-center lg:place-content-center my-4 lg:w-[70%] w-full'>
            <Image alt="logo-card-center" src={props.image} width="72" height="72"/>
            <div className='flex flex-col ml-5 content-center'>
                <div className='text-xl font-bold text-corla md:text-justify text-center'>
                    {props.title}
                </div>
                <div className='text-sm text-white font-400 md:text-justify text-center  '>
                    {props.description}
                </div>
            </div>
        </div>

    </>
    )
}

export default CardCenterHome
