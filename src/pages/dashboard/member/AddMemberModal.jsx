import { useState } from "react"
import Button from "../../../components/Button"
import Modal from "../../../components/Modal"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addMemberSchema } from '../../../helpers/Schemas'
import { apiResponseHandler } from '../../../helpers/ApiHandler'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddMemberModal = ({closeModal}) => {
    const {register,handleSubmit,reset,formState:{errors}}= useForm({
         resolver: yupResolver(addMemberSchema)
    })
const [img,setImg] = useState(null)
const queryClient = useQueryClient()

const {mutate,isPending} = useMutation({
    mutationKey: ['add_member'],
    mutationFn: async (data) => {
        data.image = img
        console.log(data)
        const res = await axios.post('api/v1/member', data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        if(res?.status == 201){
            toast.success('Member Added Successfully')
            queryClient.refetchQueries({ queryKey: ['members'] })
            setImg(null)
            reset()
            closeModal()
        }
        apiResponseHandler(res)
    }
})

const handleClose =()=>{
  setImg(null)
  closeModal()
}

  return (
    <Modal closeModal={closeModal} modal_id='add_member_modal'>
        <div className="p-5 overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <h1 className="text-2xl text-center text-blue-500 poppins-bold">New Member</h1>
            <form  onSubmit={handleSubmit((data)=>mutate(data))}>
            <div className="flex flex-col poppins-regular-italic gap-y-5">
            {!img ?<div
                    id="FileUpload"
                    className="relative mt-5 mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      value={img}
                      onChange={(e)=>setImg(e.target.files[0])}
                      className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                    />
                     <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex items-center justify-center w-10 h-10 bg-white border rounded-full border-stroke dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                </div>:<><img src={URL.createObjectURL(img)} alt="img" className="h-56 rounded-md "/>
                  <button onClick={()=>setImg(null)} className="p-1 text-white bg-blue-500 rounded-md">Change Profile</button>
                </>}
                <div className="flex flex-col gap-y-2">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name" className="form-control"{...register('firstname')}/>
                   <small className="text-red-300">{errors.firstname?.message}</small>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" className="form-control" {...register('lastname')} />
                    <small className="text-red-300">{errors.lastname?.message}</small>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Other Name</label>
                    <input type="text" placeholder="Enter other name" className="form-control" {...register('othername')} />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Telephone</label>
                    <input type="tel" placeholder="(+233 57 589 2390)" className="form-control" {...register('phone')}/>
                    <small className="text-red-300">{errors.phone?.message}</small>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Gender</label>
                    <select className="form-control" {...register('gender')}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    <small className="text-red-300">{errors.gender?.message}</small>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Gender</label>
                    <select className="form-control" {...register('communicant')}>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <small className="text-red-300">{errors.communicant?.message}</small>
                </div>
                <div className="flex flex-col col-span-2">
                    <label>Role</label>
                    <select className="form-control" {...register('role')}>
                        <option value='member'>Member</option>
                        <option value='agent-in-charge'>Agent-in-charge</option>
                        <option value='Senior presbyeter'>Senior Presbyeter</option>
                        <option value='session clerk'>Session Clerk</option>
                        <option value='session member'>Session Member</option>
                        <option value='treasurer'>Treasurer</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Date of Birth</label>
                    <input type="date"  className="form-control" {...register('dateOfBirth')} />
                    <small className="text-red-300">{errors.dateOfBirth?.message}</small>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Age Range</label>
                    <select className="form-control" {...register('ageRange')}>
                    <option>-select range-</option>
                    <option value='0-12'>0-12</option>
                    <option value='13-18'>13-18</option>
                    <option value='19-30'>19-30</option>
                    <option value='31-40'>31-40</option>  
                    <option value='41+'>41+</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Status</label>
                    <select className="form-control" {...register('status')}>
                    <option>-select status-</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                    </select>
                    <small className="text-red-300">{errors.status?.message}</small>
                </div>
                </div>
                <Button btnText='Add Member' cssClass='btn-primary my-5'/>
                <button className="w-full p-1 my-1 text-white bg-red-500" onClick={handleClose}>Close</button>
            </form>
        </div>
    </Modal>
  )
}

export default AddMemberModal