import React from 'react'

const Contact = () => {
  return (
    <div className='p-5 my-5 '>
        <h1 className='my-5 text-4xl text-blue-500 uppercase poppins-regular'>Get in touch with us</h1>
        <form>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='name' className='text-xl text-blue-500 poppins-medium'>Name</label>
                <input type='text' name='name' id='name' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='email' className='text-xl text-blue-500 poppins-medium'>Email</label>
                <input type='email' name='email' id='email' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor='message' className='text-xl text-blue-500 poppins-medium'>Message</label>
                <textarea name='message' id='message' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'></textarea>
            </div>
            <button type='submit' className='w-full px-4 py-2 my-5 text-white bg-blue-500 rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Contact