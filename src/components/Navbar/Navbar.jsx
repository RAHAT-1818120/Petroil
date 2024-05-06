import React, { useState } from 'react'
import {AiOutlineBars} from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Container from '../Layouts/Container';

const Navbar = () => {
    const [show, setShow]=useState(false);
    const toggle=()=>{
        setShow(!show)
    }


  return (
    <div className='bg-primary py-6'>
        <Container>
            <div className='flex items-center justify-between'>
                <div className='w-1/5'>
                    <img src="assets/logo.png" alt="logo" />
                </div>
                <div className='flex justify-end'>
                    <div onClick={toggle} className='md:hidden'>
                        {
                            show==true ? <IoMdClose className='text-white'/> : <AiOutlineBars className='text-white'/>
                        }
                    </div>
                    <div className={`text-right md:flex justify-end items-center font-pops text-white text-base font-semibold z-[-1] md:z-0 md:static absolute top-[-150px] right-0 ${show ? 'p-[10px] md:p-0 top-[150px] bg-primary w-full duration-700 block':'p-[10px] md:p-0 top-0 bg-primary w-full duration-700'}`}>
                        <ul className='md:flex gap-x-5 pb-3 md:pb-0'>
                            <li><a className='hover:text-black' href="">Home</a></li>
                            <li><a className='hover:text-black' href="">About</a></li>
                            <li><a className='hover:text-black' href="">Services</a></li>
                            <li><a className='hover:text-black' href="">Gallery</a></li>
                            <li><a className='hover:text-black' href="">Blog</a></li>
                        </ul>
                        <button className='border-2 border-white p-btn md:ml-[40px] xl:ml-[72px] z-[1] relative after:content[""] after:absolute after:top-0 after:left-[100%] after:bg-white after:w-full after:h-full after:duration-300 overflow-hidden after:z-[-1] hover:after:left-0 hover:text-black'>CONTACT</button>
                    </div>
                </div>
            </div>
        </Container>

    </div>
  )
}

export default Navbar