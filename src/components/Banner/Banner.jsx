import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
  return (
    <div style={{
        background: 'url(../assets/banner.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover' 
    }}>
        <div className='bg-overlay w-full h-full py-10 sm:py-[120px] md:py-[90px] lg:py-[160px] xl:py-[258px]'>
            <Container>
                <div className='font-pops text-white'>
                    <h1 className='text-2xl sm:text-4xl md:text-[50px] xl:text-[64px] md:leading-[64px] xl:leading-[96px] font-bold w-[300px] sm:w-[500px] md:w-[500px] xl:w-[842px] mb-7'>We exist since 1975 on the oil and gas industry.</h1>
                    <button className='p-btn bg-primary text-xs md:text-sm xl:text-base font-semibold'>LEARN MORE</button>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Banner