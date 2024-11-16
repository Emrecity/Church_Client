import React from 'react'

const HomeCard = ({cssClass,title,description,imageUrl}) => {
  return (
    <div className={`${cssClass} items-center max-h-svh border border-blue-300 justify-center w-screen`}>
        <img src={imageUrl} alt={title} className='w-full' />
      {/* <h1 className='absolute text-3xl font-bold text-center text-white'>{title}</h1>
      <p className='absolute mt-10 text-xl text-center text-white'>{description}</p> */}
    </div>
  )
}

export default HomeCard