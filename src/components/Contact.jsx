import React from 'react'

const Contact = () => {
  return (
    <div className='p-5 sm:my-5 '>
        <h1 className='my-1 text-xl text-blue-500 uppercase sm:my-5 sm:text-4xl poppins-regular'>Get in touch with us</h1>
        <form>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='name' className='text-base text-blue-500 sm:text-xl poppins-medium'>Name</label>
                <input type='text' name='name' id='name' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='email' className='text-base text-blue-500 sm:text-xl poppins-medium'>Email</label>
                <input type='email' name='email' id='email' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='message' className='text-base text-blue-500 sm:text-xl poppins-medium'>Message</label>
                <textarea name='message' id='message' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'></textarea>
            </div>
            <button type='submit' className='w-full p-1 mt-5 text-white bg-blue-500 rounded-md sm:px-4 sm:py-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact