import React, {useState} from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import AddMemberModal from './AddMemberModal'
import { useModalActions } from '../../../components/ModalActions'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiResponseHandler } from '../../../helpers/ApiHandler'
import DataTable from "react-data-table-component"

const Members = () => {
    const { open: openAddMemberModal, close: closeAddMemberModal} = useModalActions('add_member_modal')
    const {data,isLoading} = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axios.get('api/v1/member')
            if(res?.status == 200){
                return res?.data?.data
            }
            apiResponseHandler(res)
        }
    })

    const [ageRange, setAgeRange] = useState('')
    const [role, setRole] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')
    const [datafilter, setFilter] = useState('')

    const list = data?.filter((item) => {
        if (ageRange != '') {
            return item.ageRange.includes(ageRange)
        }
        if (role != '') {
            return item.role.includes(role)
        }
        if (gender != '') {
            return item.gender.includes(gender)
        }
        if (status != '') {
            return item.status.includes(status)
        }
        if (datafilter != '') {
          return item.firstname.toLowerCase().includes(datafilter) || item.lastname.toLowerCase().includes(datafilter)
        }
        return item
      })

    const columns = [
        {
          name: "First Name",
          selector: (row) => `${row.firstname} ${row.lastname} ${row.othername}`,
          sortable: true
        },
        {
            name: "Date of Birth",
            selector: (row) => row.dateOfBirth,
            sortable: true
          },
        {
          name: "Phone",
          selector: (row) => row.phone,
          sortable: true
        },
        {
          name: "Gender",
          selector: (row) => row.gender,
          sortable: true
        },
        {
          name: "Age Range",
          selector: (row) => row.ageRange,
          sortable: true
        },
        {
          name: "role",
          selector: (row) => row.role,
          sortable: true
        },
        {
          name: "Action",
          cell: (row) => {
            return (<>
              <button className='btn-primary'>Edit</button>
              <button>Delete</button>
            </>)
          },
        },
      ]

  return (
    <div className='p-5 bg-white'>
        <Breadcrumb pageName='Members'/>
        <div className='flex flex-col-reverse justify-between gap-y-2 sm:flex-row poppins-semibold'>
            <h1>List of Members</h1>
            <button onClick={()=>openAddMemberModal()}  className='btn-primary'>Add Member</button>
        </div>
        <div className='flex flex-col justify-center gap-5 my-5 sm:flex-row poppins-meduim'>
            <h1 className='mt-2 font-bold'>Filters</h1>
            <select className='filter-control' value={ageRange} onChange={(e)=>{
                setAgeRange(e.target.value)
                setFilter('')
                setGender('')
                setStatus('')
                setRole('')
                }}>
                <option value=''>--select age--</option>
                <option value='0-12'>0-12</option>
                <option value='13-18'>13-18</option>
                <option value='19-30'>19-30</option>
                <option value='31-40'>31-40</option>
                <option value='41+'>41+</option>
            </select>
            <select className='filter-control' value={role} onChange={(e)=>{
                setRole(e.target.value)
                setFilter('')
                setGender('')
                setStatus('')
                setAgeRange('')
                }}>
                <option value=' '>--select role--</option>
                <option value='member'>Member</option>
                <option value='presbyeter'>Presbyeter</option>
                <option value='session clerk'>Session clerk</option>
                <option value='agent-in-charge'>Agent-in-charge</option>
                <option value='session member'>Session Member</option>
                <option value='senior presbyeter'>Senior Presbyeter</option>
                <option value='treasurer'>Treasurer</option>
            </select>
            <select className='filter-control' value={gender} onChange={(e)=>{
                setGender(e.target.value)
                setFilter('')
                setAgeRange('')
                setStatus('')
                setRole('')
                }}>
                <option value=''>--select gender--</option>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
            <select className='filter-control' value={status} onChange={(e)=>{
                setStatus(e.target.value)
                setFilter('')
                setGender('')
                setAgeRange('')
                }}>
                <option value=''>--select status--</option>
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
            </select>
            <input type='search' placeholder='Search...' className='w-full filter-control'value={datafilter} onChange={(e)=>{setFilter(e.target.value)}}/>
        </div>
        <AddMemberModal closeModal={closeAddMemberModal}/>
        <DataTable columns={columns} data={list} pagination />
    </div>
  )
}

export default Members