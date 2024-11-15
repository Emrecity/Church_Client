import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import { useModalActions } from '../../../components/ModalActions'
import AddEventModal from './AddEventModal'

const ManageEvent = () => {
    const { open: openAddEventModal, close: closeAddEventModal} = useModalActions('add_event_modal')
  return (
    <div className='p-5 bg-white'>
        <Breadcrumb pageName="Manage Event" />
        <div className='flex flex-col-reverse justify-between gap-y-2 sm:flex-row poppins-semibold'>
            <h1>List of Events</h1>
            <button onClick={()=>openAddEventModal()}  className='btn-primary'>Add Event</button>
        </div>
        <div className='flex flex-col justify-center gap-5 my-5 sm:flex-row poppins-meduim'>
            <select className='filter-control'>
                <option>--Category--</option>
                <option>Camp</option>
                <option>Prayers/All Night</option>
                <option>Sports</option>
            </select>
            <select className='filter-control'>
                <option>--select status--</option>
                <option>Ongoing</option>
                <option>Upcoming</option>
            </select>
            <input type='search' placeholder='Search...' className='w-full filter-control'/>
        </div>
        <AddEventModal closeModal={closeAddEventModal}/>
    </div>
  )
}

export default ManageEvent