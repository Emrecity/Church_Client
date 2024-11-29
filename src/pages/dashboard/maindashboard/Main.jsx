import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import CardDataStats from '../../../components/CardDataStats'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { apiResponseHandler } from '../../../helpers/ApiHandler'

const Main = () => {
    const {data} = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axios.get('api/v1/stats')
            if(res?.status == 200){
                return res?.data?.data
            }
            apiResponseHandler(res)
        }
    })
    const stats = [{title:'Total Members',total:data?.TotalMembers},{title:'Males',total:data?.TotalMaleMembers},{title:'Females',total:data?.TotalFemaleMembers},{title:'Active Members',total:data?.ActiveMembers.length},{title:'Total Users',total:data?.TotalUsers},{title:'Total Events',total:data?.TotalEvents},{title:'Upcoming Events',total:data?.UpcomingEvents},{title:'Ongoing Events',total:data?.OngoingEvents}]

    const Usercolumns = [
        {
            name: 'Full Name',
            selector: (row) => row.fullname,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        }]

    const Membercolumns = [
        {
            name: 'Full Name',
            selector: (row) => `${row.firstname} ${row.othername} ${row.lastname}`,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: (row) => row.phone,
        },
        {
            name: 'Gender',
            selector: (row) => row.gender,
        }]

  return (
    <div className='p-5 bg-white'>
        <Breadcrumb pageName='Main'/>
       <div className='grid grid-cols-2 gap-5 my-5 sm:grid-cols-4'>
       {stats.map((stat,index)=>{
         return <CardDataStats key={index} title={stat.title} total={stat.total}/>
       })}
       </div><hr className='h-2 bg-slate-600'/>
       <div className='my-5 '>
        <h1 className='text-2xl font-bold text-center text-blue-500'>Users</h1>
        <DataTable columns={Usercolumns} data={data?.ListUsers} pagination/>
       </div>
       <div className='my-5'>
        <h1 className='text-2xl font-bold text-center text-blue-500'>Active Members</h1>
        <DataTable columns={Membercolumns} data={data?.ActiveMembers} pagination/>
       </div>
    </div>
  )
}

export default Main