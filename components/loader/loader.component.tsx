import Image from 'next/image'
import React from 'react'

const Loader = ({isVisible}:{isVisible:boolean}) => {
  return (
      <div className={`bg-white absolute top-0 ${isVisible?'':'hidden'} left-0 transition-all h-screen w-screen flex items-center justify-center`}>
        <Image alt='loader-image' src={require('@/public/loader.gif')} width={300} height={300} />
    </div>
  )
}

export default Loader