import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
    <div className='-z-10 bg-DarkGreen w-full flex justify-center lg:h-[196px] md:h-[271px] place-content-center h-[450px] pb-[3em]'>   
        <div className='pt-14 flex  flex-col lg:flex-row justify-between w-[90%] items-center  content-center place-items-center md: '>
            <div className='flex justify-between md:flex-row flex-col lg:w-1/2 w-full '>
                <div className='flex flex-col md:items-start content-start items-center'>
                    <Image className='mb-[2em]' src={"/assets/logo.svg"} width="160" height="40" alt="logo-myteam"/>
                    <div className='flex mb-[2em] flex-row md:justify-between justify-center text-center content-center items-center '>
                        <Link className="flex  hover:text-corla text-white font-bold ml-10 text-center "href='/'>
                        home
                        </Link>
                        <Link className="flex  hover:text-corla text-white font-bold ml-10 text-center " href='/aboutus' >
                            about
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col'>
                <p className=' text-white mb-[1em] items-center md:items-unset text-center'> 987  Hillcrest Lane</p> <p className=' text-white mb-[1em] items-center md:items-unset text-center md:text-unset'>Irvine CA</p> <p className=' text-white mb-[1em] items-center md:items-unset text-center md:text-unset'>California 92714</p><p className=' text-white mb-[1em] items-center md:items-unset text-center md:text-unset'>Call Us : 949-833-7432</p>
                        </div>
            </div>
        <div className='md:flex-row  lg:flex-col flex-col flex justify-between w-full items-center lg:items-end '>
            <div className='flex flex-row justify-center md:justify-unset lg:w-1/2 mb-[2em]'>
                <Image className='ml-[.5em]'src={"/assets/icon-twitter.svg"} alt="logo-twitter" width="24" height="24" />
                <Image className='ml-[.5em]' src={"/assets/icon-pinterest.svg"} alt="logo-twitter" width="24" height="24" />
                <Image className='ml-[.5em]' src={"/assets/icon-linkedin.svg"} alt="logo-twitter" width="24" height="24" />
            </div>
            <p  className='text-white '>Copyright 2020. All Rights Reserved</p>
        </div>
</div>
    </div>
    )
}

export default Footer
