import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import AddMemberModal from './AddMemberModal'
import { useModalActions } from '../../../components/ModalActions'

const Members = () => {
    const { open: openAddMemberModal, close: closeAddMemberModal} = useModalActions('add_member_modal')
  return (
    <div className='p-5 bg-white'>
        <Breadcrumb pageName='Members'/>
        <div className='flex flex-col-reverse justify-between gap-y-2 sm:flex-row poppins-semibold'>
            <h1>List of Members</h1>
            <button onClick={()=>openAddMemberModal()}  className='btn-primary'>Add Member</button>
        </div>
        <div className='flex flex-col justify-center gap-5 my-5 sm:flex-row poppins-meduim'>
            <h1 className='mt-2 font-bold'>Filters</h1>
            <select className='filter-control'>
                <option>--select age--</option>
                <option>0-12</option>
                <option>13-18</option>
                <option>19-30</option>
                <option>31-40</option>
                <option>41+</option>
            </select>
            <select className='filter-control'>
                <option>--select role--</option>
                <option>Member</option>
                <option>Presbyeter</option>
                <option>Session clerk</option>
                <option>Catechist in charge</option>
                <option>Senior Presbyeter</option>
                <option>Treasurer</option>
            </select>
            <select className='filter-control'>
                <option>--select gender--</option>
                <option>male</option>
                <option>female</option>
            </select>
            <select className='filter-control'>
                <option>--select status--</option>
                <option>Active</option>
                <option>Inactive</option>
            </select>
            <input type='search' placeholder='Search...' className='w-full filter-control'/>
        </div>
        <AddMemberModal closeModal={closeAddMemberModal}/>
    </div>
  )
}

export default Members