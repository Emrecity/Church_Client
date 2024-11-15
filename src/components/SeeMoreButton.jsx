import React from 'react'

const SeeMoreButton = ({handClick}) => {
    return (
        <button onClick={handClick||function(){alert('Clicked')}} className='px-3 text-center text-white rounded bg-gradient-to-br from-blue-400 via-red-200 to-red-400 hover:from-red-500 hover:via-blue-200 hover:to-blue-500'>
            <span className='flex items-center justify-center'>
            See More
            <svg fill="#fff" width="15px" height="15px" viewBox="0 0 24 24" id="right-top-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M19,4H15a1,1,0,0,0,0,2h1.59L4.29,18.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.41V9a1,1,0,0,0,2,0V5A1,1,0,0,0,19,4Z"></path></svg>
            </span>
        </button>
      )
}

export default SeeMoreButton