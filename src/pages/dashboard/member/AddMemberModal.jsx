import Button from "../../../components/Button"
import Modal from "../../../components/Modal"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addMemberSchema } from '../../../helpers/Schemas'
import { apiResponseHandler } from '../../../helpers/ApiHandler'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddMemberModal = ({closeModal}) => {
    const {register,handleSubmit,reset}= useForm({
         resolver: yupResolver(addMemberSchema)
    })

const {mutate,isPending} = useMutation({
    mutationKey: ['add_member'],
    mutationFn: async (data) => {
        const res = await axios.post('api/v1/member', data)
        if(res?.status == 201){
            toast.success('Member Added Successfully')
            reset()
            closeModal()
        }
        apiResponseHandler(res)
    }
})

  return (
    <Modal closeModal={closeModal} modal_id='add_member_modal'>
        <div className="p-5 overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <h1 className="text-2xl text-center text-blue-500 poppins-bold">New Member</h1>
            <form  onSubmit={handleSubmit((data)=>mutate(data))}>
            <div className="flex flex-col poppins-regular-italic gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name" className="form-control"{...register('firstname')}/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" className="form-control" {...register('lastname')} />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Other Name</label>
                    <input type="text" placeholder="Enter other name" className="form-control" {...register('othername')} />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Telephone</label>
                    <input type="tel" placeholder="(+233 57 589 2390)" className="form-control" {...register('phone')}/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Gender</label>
                    <select className="form-control" {...register('gender')}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
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
                </div>
                <Button btnText='Add Member' cssClass='btn-primary my-5'/>
            </form>
        </div>
    </Modal>
  )
}

export default AddMemberModal