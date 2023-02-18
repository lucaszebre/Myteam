import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
    return (
    <div className='flex flex-col w-full content-center bg-green h-40 items-center '>
        <div className=' pt-14 flex flex-row justify-between w-[90%] items-center  content-center place-items-center md: '>
            <div className='flex flex-row  content-center w-1/2  items-center'>
                <Image alt='logo' src={'./assets/logo.svg'} width="160" height="40" />
                <Link className= ' md:flex text-white hover:text-corla font-bold ml-10 hidden '  href='/'>
                    Home
                </Link>
                <Link href='/aboutus' className=' md:flex hidden  hover:text-corla text-white font-bold ml-10'>
                    About
                </Link>
            </div>
                <Link href='/contact' >
                    <button className=' md:flex hidden hover:bg-white hover:text-green text-white font-bold items-baseline rounded-full border-white border-solid border-2 px-10 py-2 content-center '>contact us</button>
                </Link>
                <Image alt='hanburger' className='md:hidden ' src={'./assets/icon-hamburger.svg'} width="30" height="30" />
            </div>
            
    </div>
    )
}

export default Nav
