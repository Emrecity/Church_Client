import React from 'react'
import SeeMoreButton from './SeeMoreButton'

const AboutUs = () => {
  return (
    <div className='p-5 my-5 '>
        <h1 className='text-4xl text-blue-500 uppercase poppins-regular'>About Us</h1>
        <div>
            <h1 className='text-xl text-center text-blue-500 poppins-medium'>Brief History Of Presbyterian Church</h1>
            <p className='text-center'>
            Big things have small beginnings”; so is The Presbyterian Church of Ghana. The First Missionaries were sent as a result of a request by Major de Richelieu, Governor of Christiansborg.
            The governor had observed the bad moral life of the Europeans in the fort. His request to the Danish Crown for missionaries was forwarded to the Basel Mission which had been set up in 1815 to train missionaries.Unfortunatly the first four missionaries died within a period of three years of arrival.

            The Basel Mission sent another team of three missionaries: Andreas Riis, 28years, Peter Petersen Jaeger, 24 years, and a doctor, Christian Friedrich Heinze, 28years. Unfortunately Dr. Heinze and P.P. Jaeger failed to survive after three months, leaving Andreas Riis alone.
            </p>
        </div>
        <div className='mx-auto my-5 w-fit'>
            <SeeMoreButton/>
        </div>
    </div>
  )
}

export default AboutUs