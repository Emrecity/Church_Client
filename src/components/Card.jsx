import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className='mx-5 card bg-gradient-to-br from-blue-400 via-red-200 to-red-400 drop-shadow-lg'>
        <div className='card-body'>
            <h1>{title||'Title Here'}</h1>
            <p>{description||'Description Here'}</p>
        </div>
    </div>
  )
}

export default Card