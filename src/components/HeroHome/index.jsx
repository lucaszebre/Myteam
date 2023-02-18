import React from 'react'
import Image from 'next/image'
const HeroHome = () => {
    return (
        <>
            <div className='relative w-full flex flex-col bg-green h-[500px]  contents-center items-center'>
                    <Image className="lg:flex hidden absolute -z-3 -left-[9rem] "src="./assets/bg-pattern-home-1.svg" width="200" height="200"/>
                    <Image className="absolute -z-3 bottom-0 lg:right-40"src="./assets/bg-pattern-home-2.svg" width="358" height="200"/>
                    <div className=' flex w-[90%] lg:flex-row lg:justify-between flex-col justify-center items-center z-10 '>
                        <div className="md:w-[40%] text-white font-black lg:text-8xl text-5xl content-center items-center lg:text-left   text-center mb-3 w-[90%]">
                            Find the best <span className='text-corla'>talent </span>
                        </div>
                        <div className='text-white  lg:text-start text-center text-extrabold lg:text-2xl lg:w-[40%] md:w-[80%] w-[90%] text-xl content-center align-text-start'>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</div>
                    </div>
            </div>
        </>
    )
    }

export default HeroHome
