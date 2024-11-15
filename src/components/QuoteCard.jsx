import React from 'react'

const QuoteCard = ({tite,quote,verse}) => {
  return (
    <div className='bg-gradient-to-bl from-blue-400 via-red-200 to-red-400 drop-shadow-lg card'>
      <div className='card-body'>
        <h2 className='text-5xl text-center text-white poppins-bold'>{tite}</h2>
        <p className='text-center text-black'>{quote}</p>
        <p className='text-center text-red-900'>({verse})</p>
      </div>
    </div>
  )
}

export default QuoteCard