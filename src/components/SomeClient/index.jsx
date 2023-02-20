import React from 'react'
import Image from 'next/image'
const SomeClient = () => {
    return (
        <div className=' -z-10 overflow-x-hidden relative bg-DarkGreen w-full h-[630px] md:h-[400px] flex items-center place-content-center'>
            <Image className="absolute  -top-[7rem] -left-[7rem] lg:top-0 -z-7 lg:left-0 md:-top-[3rem] md:-left-[2rem]" src={"/assets/bg-pattern-about-4.svg"} width="200" height="200" />
            <div className='flex flex-col w-[90%] items-center'>
                <h1 className='text-center mb-[.5em] md:mb-[2em] text-white text-[3rem] font-bold'>
                    Some of our client
                </h1>
                <div className='flex w-full flex-col md:flex-row items-center justify-between'>
                    <Image className='md:mb-0 mb-[3em]' src={"/assets/logo-gadgets-now.png"} width="120" height="40" alt="logo-client" />
                    <Image className='md:mb-0 mb-[3em]' src={"/assets/logo-jakarta-post.png"} width="120" height="40"alt="logo-client" />
                    <Image className='md:mb-0 mb-[3em]' src={"/assets/logo-tech-radar.png"} width="120" height="40" alt="logo-client" />
                    <Image className='md:mb-0 mb-[3em]' src={"/assets/logo-the-guardian.png"} width="120" height="40" alt="logo-client" />
                    <Image className='md:mb-0 mb-[3em]' src={"/assets/logo-the-verge.png"} width="120" height="40" alt="logo-client" />
                </div>
            </div>
        </div>
    )
}

export default SomeClient
