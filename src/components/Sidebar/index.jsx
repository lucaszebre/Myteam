import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SideBar = (props) => {
    return (
    <>
        <div className={`md:hidden  ${ props.isOpen ?'flex':'hidden'} bg-police z-999 overflow-x-hidden top-0   flex-col fixed right-0 w-[70%] h-screen place-content-start`}>
            <div className='pt-14 flex flex-row justify-between w-[90%] items-right  content-right place-items-end md: '>
                <Image className='absolute cursor-pointer right-[2em]' src={"/assets/icon-close.svg"} width="30" height="30" alt="close-svg"
                onClick={props.onClick}
                />
                </div>
            <div className='flex flex-col mt-[6em] place-content-between justify-center items-center contents-center'>
            <Link onClick={props.onClick} className= ' text-center  text-white hover:text-corla font-bold ml-10  mb-[2em] text-5xl'  href='/'>
                    Home
                </Link>
                <Link onClick={props.onClick} href='/aboutus' className=' text-center text-5xl  mb-[2em]  hover:text-corla text-white font-bold ml-10'>
                    About
                </Link>
                <Link  onClick={props.onClick} href='/contact' >
                    <button className=' items-center text-4xl mt-[1em] flex  hover:bg-white hover:text-green text-white font-bold  rounded-full border-white border-solid border-2 px-10 py-2 content-center '>contact us</button>
                </Link>
            </div>


            <Image className='absolute bottom-0 -right-[3em]' src={"/assets/bg-pattern-about-1-mobile-nav-1.svg"} width="200" height="200" alt="Bg-pattern"/>

        </div>
    </>
    )
}

export default SideBar
