import React from 'react'

const Card = ({title,description,date,time,venue}) => {
  date = new Date(date)
  date = date.toDateString()

  return (
    <div className='mx-5 text-sm border-4 sm:text:base card border-r-blue-700 border-l-blue-700 sm:drop-shadow-lg'>
        <div className='space-y-2 text-blue-500 card-body'>
            <div>
                <h1 className='card-title'>{title||'Title Here'}</h1>
                <p className='mb-5 text-sm'>{description||'Description Here'}</p>
                <p> Location:{venue||'Venue Here'}</p>
            </div>
            <div className='flex gap-5 text-red-500 card-footer'>
                <small>Date: {date||'Date Here'}</small>
                <small>Time: {time||'Time Here'}</small>
            </div>
        </div>
    </div>
  )
}

export default Card