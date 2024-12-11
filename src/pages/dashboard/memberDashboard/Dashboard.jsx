import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiResponseHandler } from '../../../helpers/ApiHandler'
import axios from 'axios'


const Dashboard = () => {

    const { data } = useQuery({
        queryKey: ['getMember'],
        queryFn: async () => {
            const id = localStorage.getItem('id')
            const res = await axios.get(`api/v1/member/${id}`)
            if(res?.status == 200){
                return res?.data?.data
            }
            apiResponseHandler(res)
        }
    })

    const date = new Date(data?.dateOfBirth)

  return (
    <div className='w-screen p-5 text-black bg-white'>
        <div className='w-[90%] mx-auto'>
            <h1 className='my-5 text-2xl font-bold'>Dashboard</h1>
            <div className='grid gap-5 sm:grid-cols-3'>
                <div className='border-2 border-blue-300 rounded-md'>
                <img src='data.image' alt='img' className='w-full rounded-md' />
                </div>
                <div className='grid col-span-2 gap-5 sm:grid-cols-2 '>
                    <div>
                        <label className='font-bold'>Firstname:</label>
                        <input type='disabled' className='rounded-md ' value={data?.firstname} />
                    </div>
                    <div>
                        <label className='font-bold'>Othername:</label>
                        <input type='disabled' className='rounded-md ' value={data?.othername} />
                    </div>
                    <div>
                        <label className='font-bold'>Lastname:</label>
                        <input type='disabled' className='rounded-md ' value={data?.lastname} />
                    </div>
                    <div>
                        <label className='font-bold'>Gender:</label>
                        <input type='disabled' className='rounded-md ' value={data?.gender} />
                    </div>
                    <div>
                        <label className='font-bold'>Date Of Birth:</label>
                        <input type='disabled' className='rounded-md ' value={date.toDateString()} />
                    </div>
                    <div>
                        <label className='font-bold'>Is Communicant:</label>
                        <input type='disabled' className='rounded-md ' value={data?.communicant} />
                    </div>
                    <div>
                        <label className='font-bold'>Status:</label>
                        <input type='disabled' className='rounded-md ' value={data?.status} />
                    </div>
                    <div>
                        <label className='font-bold'>Phone:</label>
                        <input type='disabled' className='rounded-md ' value={data?.phone} />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard