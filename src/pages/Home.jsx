import React from 'react'
import { motion } from 'framer-motion'
import HomeCarousel from '../components/HomeCarousel'
import Typewriter from '../components/Typewriter'
import QuoteCard from '../components/QuoteCard'
import EventCarousel from '../components/EventCarousel'
import Timeline from '../components/Timeline'
import SeeMoreButton from '../components/SeeMoreButton'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiResponseHandler } from '../helpers/ApiHandler'

const Home = () => {

  const {data} = useQuery({
    queryKey: ['loadstats'],
    queryFn: async () => {
        const res = await axios.get('api/v1/stats')
        if(res?.status == 200){
            return res?.data?.data
        }
        apiResponseHandler(res)
    }
})
  return (
    <div className='bg-white'>
      <HomeCarousel/>
      
      <motion.div 
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6,delay:0.2  }}
      className='grid grid-cols-1 p-5 my-5 text-center border h-fit border-t-black sm:grid-cols-2 sm:gap-x-10 gap-y-5'>
        <Typewriter/>
        <QuoteCard tite="Hardwork" quote="The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied." verse="Proverbs 13:4"/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:1.5 }}
      className='p-5 my-5'>
        <div className='flex flex-col my-5 gap-y-3 sm:my-10 sm:justify-between sm:flex-row'>
          <h1 className='text-base text-blue-500 uppercase sm:text-3xl poppins-regular'>Upcoming Events</h1>
          <SeeMoreButton handClick={()=>{alert('Clicked')}}/>
        </div>
        <EventCarousel data= {data}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:1 }}
      className='p-5 my-5'>
      <div className='flex flex-col my-10 gap-y-3 sm:justify-between sm:flex-row'>
          <h1 className='text-xl text-blue-500 uppercase sm:text-3xl poppins-regular'>Leaderships</h1>
          <SeeMoreButton handClick={()=>{alert('Clicked')}}/>
        </div>
        <Timeline/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1,delay:1.2 }}
      >
        <AboutUs/>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1,delay:1.4 }}
      className='grid grid-cols-1 mx-5 gap-y-1 sm:gap-x-5 sm:grid-cols-2'>
        <Contact/>
        <section className='w-full'><img src='logo_1.png' alt='church' className='w-full sm:h-[70%] sm:my-10 hidden sm:block'/></section>
      </motion.div>
    </div>
  )
}

export default Home