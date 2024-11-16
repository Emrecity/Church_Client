import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import CardDataStats from '../../../components/CardDataStats'

const Main = () => {
    const stats = [{title:'Total Members',total:'300',rate:'+23'},{title:'Males',total:'200',rate:'+23'},{title:'Females',total:'100',rate:'+23'},{title:'Active Members',total:'50',rate:'+23'},{title:'Total Events',total:'50',rate:'+23'},{title:'Upcoming Events',total:'25',rate:'+23'},{title:'Past Events',total:'5',rate:'+23'},{title:'Ongoing Events',total:'20',rate:'+23'}]
  return (
    <div className='p-5 bg-white'>
        <Breadcrumb pageName='Main'/>
       <div className='grid grid-cols-2 gap-5 my-5 sm:grid-cols-4'>
       {stats.map((stat,index)=>{
         return <CardDataStats key={index} title={stat.title} total={stat.total} rate={stat.rate}/>
       })}

       </div>
    </div>
  )
}

export default Main