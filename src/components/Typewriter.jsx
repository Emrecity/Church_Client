import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Typewriter = () => {
  const [text] = useTypewriter({
    words:['The Centrality of the Word of God','Discipline','Hardwork','Intergrity','Humility','Unity','upholding Democratic Principles','Godly Leadership and Skills Development','Sound Moral Principle','Upholding Democratic Principles'],
    delayBetweenWords: 1000,
    autoStart: true,
    loop:{},
  })
  return (
    <div className='container w-full p-2 h-fit sm:h-full sm:p-5 bg-gradient-to-tr via-blue-400 from-slate-400 to-blue-500 card'> 
    <div className='card-body'>
    <h1 className='text-xl text-white sm:text-5xl poppins-bold-italic'>Our Core Values</h1>
       <span className='poppins-medium'>{text}<Cursor/></span> 
      </div>
    </div>
  )
}

export default Typewriter