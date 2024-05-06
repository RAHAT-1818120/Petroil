import React from 'react'
import Container from '../Layouts/Container'

const Supplier = () => {
  return (
    <div className='py-[40px] md:py-[78px]'>
        <Container>
            <div className='sm:flex items-center justify-between'>
                <div className='md:w-1/3'>
                    <h3 className='font-pops text-4xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[45px] lg:leading-[50px] xl:leading-[72px] font-bold pb-5 md:pb-0'>The Biggest Supplier on the Country</h3>
                </div>
                <div className=''>
                    <p className='font-pops text-base font-medium text-secondary sm:w-[390px] lg:w-[550px] xl:w-[651px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Supplier