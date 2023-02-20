import React from 'react'
import CardBottom from '../CardBottom'
import Image from 'next/image'
const Bottom = () => {
    return (
        <div className='-z-10 overflow-x-hidden relative bg-green w-full lg:h-[745px] h-auto  justify-center content-center place-content-center flex flex-row pb-[4em]' >
            <Image className='absolute top-0 left-0 -z-6' src={"/assets/bg-pattern-home-4-about-3.svg"} width="147" height="100"/>
            <Image class="absolute bottom-0 -right-[2rem] -z-4 " alt='pattern' src="./assets/bg-pattern-home-5.svg" width="200" height="200" />
        <div className='w-[90%] flex flex-col justify-center items-center mt-[5em] '>
            <div className='text-center w-[80%] text-white font-extrabold lg:text-5xl mb-[2em] md:pt-0 mt-10 text-4xl'>
            Delivering real results for top companies. Some of our <span className='text-rupture'>success stories.</span>
            </div>
            <div className='flex lg:flex-row flex-col w-full justify-between'>
                <CardBottom 
                description="“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
                name="Kady Baker"
                position="Product Manager at Bookmark"
                avatar="/assets/avatar-kady.jpg"
                />
                <CardBottom
                description="“We needed to automate our entire onboarding process. The Myteam platform came in and did just that: Automate our entire onboarding process from start to finish.”"
                name="Aiysha Reese"
                position="Founder of Manage"
                avatar="/assets/avatar-aiysha.jpg"
                />
                <CardBottom
                description="“Myteam helped us build a customer base of over 500,000 users in under a year. The Myteam platform came in and did just that: Automate our entire onboarding process from start to finish.”"
                name="Arthur Clarke"
                position="Co-founder of MyPhysio"
                avatar="/assets/avatar-arthur.jpg"
                />
            </div>
        </div>
        </div>
    )
}

export default Bottom
