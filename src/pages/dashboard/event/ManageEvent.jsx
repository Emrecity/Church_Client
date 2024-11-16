import React, {useState} from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import { useModalActions } from '../../../components/ModalActions'
import AddEventModal from './AddEventModal'
import { useQuery,useQueryClient,useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { apiResponseHandler } from '../../../helpers/ApiHandler'
import DataTable from "react-data-table-component"
import DeleteButton from '../../../components/DeleteButton'
import EditButton from '../../../components/EditButton'
import toast from 'react-hot-toast'

const ManageEvent = () => {
    const { open: openAddEventModal, close: closeAddEventModal} = useModalActions('add_event_modal')

    const {data,isLoading} = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axios.get('api/v1/event')
            if(res?.status == 200){
                return res?.data?.data
            }
            apiResponseHandler(res)
        }
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationFn: async (id) => {
            console.log(id)
            const res = await axios.delete(`api/v1/event/${id}`)
            if(res?.status == 200){
                toast.success('Event Deleted Successfully')
                queryClient.refetchQueries({ queryKey: ['events'] })
                return res?.data?.data
            }
            apiResponseHandler(res)
        }
    })


    const columns = [
        {
          name: "title",
          selector: (row) =>row.title,
          sortable: true
        },
        {
          name: "venue",
          selector: (row) => row.venue,
          sortable: true
        },
        {
          name: "speaker",
          selector: (row) => row.speaker,
          sortable: true
        },
        {
          name: "category",
          selector: (row) => row.category,
          sortable: true
        },
        {
          name: "status",
          selector: (row) => row.status,
          sortable: true
        },
        {
          name: "date",
          selector: (row) => row.date,
          sortable: true
        },
        {
          name: "Action",
          cell: (row) => {
            return (<>
              <EditButton title="Edit" />
              <DeleteButton handleClick={()=>mutate(row?._id)}/>
            </>)
          },
        },
      ]

    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')
    const [datafilter, setFilter] = useState('')

    const list = data?.filter((item) => {
        if (category != '') {
            return item.category.includes(category)
        }
        if (status != '') {
            return item.status.includes(status)
        }
        if (datafilter != '') {
          return item.title.toLowerCase().includes(datafilter) || item.description.toLowerCase().includes(datafilter)|| item.speaker.toLowerCase().includes(datafilter)
        }
        return item
      })



  return (
    <div className='p-5 bg-white'>
        <Breadcrumb pageName="Manage Event" />
        <div className='flex flex-col-reverse justify-between gap-y-2 sm:flex-row poppins-semibold'>
            <h1>List of Events</h1>
            <button onClick={()=>openAddEventModal()}  className='btn-primary'>Add Event</button>
        </div>
        <div className='flex flex-col justify-center gap-5 my-5 sm:flex-row poppins-meduim'>
            <select className='filter-control' value={category} onChange={(e)=>{
                setCategory(e.target.value)
                setFilter('')
                setStatus('')
                }}>
                <option value=''>--Category--</option>
                <option value='camp'>Camp</option>
                <option value='prayers'>Prayers/All Night</option>
                <option value='sports'>Sports</option>
            </select>
            <select className='filter-control' value={status} onChange={(e)=>{
                setStatus(e.target.value)
                setFilter('')
                setCategory('')
                }}>
                <option value=''>--select status--</option>
                <option value='ongoing'>Ongoing</option>
                <option value='upcoming'>Upcoming</option>
            </select>
            <input type='search' placeholder='Search...' className='w-full filter-control' value={datafilter} onChange={(e)=>{setFilter(e.target.value)}}/>
        </div>
        <AddEventModal closeModal={closeAddEventModal}/>
        <DataTable columns={columns} data={list} pagination />
    </div>
  )
}

export default ManageEvent