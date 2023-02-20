import React from 'react'
import CardCenterHome from '../CardCenterHome'
import Image from 'next/image'
const CenterHome = () => {
    return (
        <>
            <div className='-z-10 overflow-x-hidden relative flex flex-col w-full content-center md:h-[684px] items-center bg-StateGreen place-content-center'>
                <Image class="absolute lg:bottom-0 -right-[7rem] -z-4 top-0  " alt='pattern' src="./assets/bg-pattern-home-3.svg" width="200" height="200" />
                <div className=' flex lg:items-start lg:text-start flex-col lg:flex-row lg:justify-between justify-center w-[90%] items-center  content-center place-items-center'>
                <div className=' lg:items-start lg:text-start h-full text-white items-center font-extrabold lg:text-6xl lg:w-[60%] md:text-2xl text-4xl md:w-[45%] relative lg:pt-0 pt-[8rem]  text-left w-full'>
                    Build & manage distributed teams like no one else.
                </div>
                <div className='flex flex-col  lg:content-center justify-center items-end md:w-[70%]  w-full md:mt-0 mt-[40vw] p-2 md:p-0' >
                    <CardCenterHome
                        title="Experienced Individuals"
                        description="Our network is made up of highly experienced professionals who are passionate about what they do."
                        image="./assets/icon-person.svg"
                    />
                    <CardCenterHome
                            title="Easy to Implement"
                            description="Our processes have been refined over years of implementation meaning your teams can hit the ground running."
                            image="./assets/icon-cog.svg"
                        />
                    <CardCenterHome 
                            title="Enhanced Productivity"
                            description="Our customized platform with in-built analytics helps you manage your distributed teams."
                            image="./assets/icon-chart.svg"
                    />
                    </div>
                </div>
            </div>
            </>
    )
}

export default CenterHome
