import React from 'react'
import Image from 'next/image'
const HeroAbout = () => {
    return (
        <div className='overflow-x-hidden relative w-full flex flex-col bg-green h-[420px]  contents-center items-center place-content-center'>
            <Image className="absolute bottom-0 -right-[8em]" src={"/assets/bg-pattern-about-1-mobile-nav-1.svg"} alt="bg-pattern" width={"200"} height="200" />
            <div className=' flex w-[90%] lg:flex-row lg:justify-between flex-col justify-center items-center z-10 place-content-center '>
            <div className="md:w-[40%] text-white font-black lg:text-8xl text-5xl content-center items-center lg:text-left   text-center mb-3 w-[90%]">
                            About
                        </div>
                        <div className='text-white  lg:text-start text-center text-extrabold lg:text-2xl lg:w-[50%] md:w-[80%] w-[90%] text-xl content-center align-text-start'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</div>
            </div>
        </div>
    )
}

export default HeroAbout
