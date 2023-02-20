import React from 'react'
import Image from 'next/image'
import CardCenterAbout from '../CardCenterAbout'
const CenterAbout = () => {
    return (
        <div className='-z-10 bg-jungle relative flex flex-col py-[7em] w-full h-full items-center place-content-center'>
                <Image className="absolute top-0 -left-[6rem] -z-1 "src={"/assets/bg-pattern-about-2-contact-1.svg"} width="200" height={"200"}/>
                <div  className='z-1 w-[90%] flex flex-col  items-center place-content-center'>
                    <h1 className='text-center text-[3rem] text-white mb-[2em] md:mt-0 mt-[4rem] font-bold'>Meet the director</h1>
                    <div className='flex content-center w-full flex-col  lg:flex-col md:flex-row'>
                        <div  className=' w-full flex lg:flex-row md:flex-col  flex-col items-center justify-between '>
                            <CardCenterAbout
                            avatar={'/assets/avatar-nikita.jpg'}
                            name={'Nikita Marks'}
                            job={'Founder & CEO'}/>
                            <CardCenterAbout
                            avatar={'/assets/avatar-christian.jpg'}
                            name={'Christian Duncan'}
                            job={'Co-founder & COO'}/>
                            <CardCenterAbout
                            avatar={'/assets/avatar-cruz.jpg'}
                            name={'Cruz Hamer'}
                            job={'Co-founder & CTO'}/>
                            </div>
                            <div  className=' w-full flex lg:flex-row md:flex-col flex-col  items-center justify-between  '>
                            <CardCenterAbout
                            avatar={'/assets/avatar-drake.jpg'}
                            name={'Drake Heaton'}
                            job={'Lead Designer'}/>
                            <CardCenterAbout
                            avatar={'/assets/avatar-griffin.jpg'}
                            name={'Griffin Wise'}
                            job={'Lead Marketer'}/>
                            <div className='bg-DarkGreen flex flex-col items-center h-[250px] lg:w-[30%] md:w-[90%]  md:mb-[4rem] md:pt-[2rem] px-[2rem] mb-[2rem] pt-[1em]  '>
                        
                            <h1 className='text-center text-rupture lg:font-xl z-10 mb-4 font-extrabold'>Aden Allan</h1>
                            <h2 className='text-center text-white lg:font-xl z-10 mb-4 font-bold'>“Empowered teams create truly amazing products. Set the north star and let them follow it.”</h2>
                            <div className='flex flex-row mb-6'>
                            <Image className='ml-[.5em]'src={"/assets/icon-twitter.svg"} alt="logo-twitter" width="24" height="24" />
                            <Image className='ml-[.5em]' src={"/assets/icon-linkedin.svg"} alt="logo-twitter" width="24" height="24" />
                            </div>
                            <div className='cursor-pointer p-[20px] rounded-full bg-rupture hover:bg-corla'><Image   src={"/assets/icon-cross.svg"} alt="croix-svg" width="16" height="16"/></div>
                            </div>
                            </div>
                    </div>
                    
                    </div>
                </div>
      
        
        
    )
    }

export default CenterAbout
