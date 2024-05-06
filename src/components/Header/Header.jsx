import React from 'react'
import {LuPhoneCall} from 'react-icons/lu'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import Container from '../Layouts/Container'

const Header = () => {
  return (
    <div className="bg-[#282828] text-white font-pops border-b-4 border-[#FFB800]">
        <Container>
            <div className='flex'>
                <div className='w-3/4 md:flex py-4'>
                    <div className='flex items-center gap-x-[5px] md:mr-[54px] relative after:contetnt[""] md:after:block after:hidden after:absolute after:top-[4px] after:right-[-27px] after:w-[1.5px] after:h-4 after:bg-[#5C6A92]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M11.875 15H2.5L2.49812 5.56625L9.64437 10.5138C9.74887 10.5861 9.87293 10.6248 10 10.6248C10.1271 10.6248 10.2511 10.5861 10.3556 10.5138L17.5 5.56875V11.25H18.75V5C18.7495 4.66863 18.6176 4.35098 18.3833 4.11666C18.149 3.88235 17.8314 3.7505 17.5 3.75H2.5C2.16858 3.75033 1.85083 3.88213 1.61648 4.11648C1.38213 4.35083 1.25033 4.66858 1.25 5V15C1.2505 15.3314 1.38235 15.649 1.61666 15.8833C1.85098 16.1176 2.16863 16.2495 2.5 16.25H11.875V15ZM16.1244 5L10 9.24L3.87563 5H16.1244Z" fill="white"/>
                        <path d="M16.25 17.5009C17.6307 17.5009 18.75 16.3814 18.75 15.0004C18.75 13.6195 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6195 13.75 15.0004C13.75 16.3814 14.8693 17.5009 16.25 17.5009Z" fill="white"/>
                        </svg>
                        <div>mail@yourcompany.com</div>
                    </div>
                    <div className='flex items-center gap-x-[5px] pt-2 md:pt-0' >
                        <LuPhoneCall/>
                        <div>+896 120 5889 (Toll free)</div>
                    </div>
                </div>
                <div className=' md:w-1/4 md:py-[18px] md:flex justify-end gap-5 ml-[50px] sm:ml-[300px] md:ml-0'>
                    <div className='flex gap-5 pt-5 md:pt-0'>
                        <a href=""><FaFacebookF/></a>
                        <a href=""><FaTwitter/></a>
                    </div>
                    <div className='flex py-4 md:py-0 gap-5'>
                        <a  href=""><FaLinkedinIn/></a>
                        <a href=""><FaInstagram/></a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header