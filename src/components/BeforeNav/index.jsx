import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const BeforeNav = () => {
    return (
    <div className='overflow-hidden relative w-full flex justify-center content-center place-content-center bg-corla md:h-[200px]  h-[302px] items-center '>
        <Image className='absolute z-10 lg:bottom-0 left-0 -bottom-[2.9rem]  ' src={"/assets/bg-pattern-home-6-about-5.svg"} width="200" height="200" />
        <div className='w-[80%] items-center flex md:flex-row md:justify-around justify-center flex-col '>
            <div className='text-green lg:text-5xl md:text-4xl font-extrabold md:mb-0 mb-[2em] text-xl'>Ready to get started?</div>
            <Link href='/contact' >
                    <button className='hover:bg-green hover:text-white flex  text-green font-bold items-baseline rounded-full border-green border-solid border-2 px-10 py-2 content-center '>contact us</button>
                </Link>
        </div>
    </div>
    )
}

export default BeforeNav
