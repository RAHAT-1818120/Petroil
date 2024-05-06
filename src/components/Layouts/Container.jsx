import React, { Children } from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto px-2.5 sm:px-6 md:px-7 lg:px-10 xl:px-0'>{children}</div>
  )
}

export default Container