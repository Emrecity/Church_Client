import Button from "../../../components/Button"
import Modal from "../../../components/Modal"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { addEventSchema } from '../../../helpers/Schemas'
import { apiResponseHandler } from '../../../helpers/ApiHandler'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'


const AddEventModal = ({closeModal}) => {
    const {register,handleSubmit,reset} = useForm({
        resolver: yupResolver(addEventSchema)
    })

    const queryClient = useQueryClient()

    const {mutate,isPending} = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post('api/v1/event', data)
            if(res?.status == 201){
                toast.success('Event Added Successfully')
                queryClient.refetchQueries({ queryKey: ['events'] })
                closeModal()
                reset()
            }
            apiResponseHandler(res)
        }
    })

  return (
    <Modal closeModal={closeModal} modal_id='add_event_modal'>
        <div className="p-5 overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <h1 className="text-2xl text-center text-blue-500 poppins-bold">New Event</h1>
            <form onSubmit={handleSubmit((data)=>mutate(data))}>
            <div className="flex flex-col poppins-regular-italic gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label>Title</label>
                    <input type="text"{...register('title')} placeholder="Enter title of the event" className="form-control"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Description</label>
                    <textarea className="form-control" {...register('description')} rows={5} placeholder="Enter description">
                    </textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Venue</label>
                    <input type="text" {...register('venue')} placeholder="Enter venue" className="form-control"/>
                </div>
                
                <div className="flex flex-col gap-y-2">
                    <label>Speaker</label>
                    <input type="text" {...register('speaker')} placeholder="Enter speaker name" className="form-control"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Category</label>
                    <select className="form-control" {...register('category')}>
                        <option value=''>--select category--</option>
                        <option value="camp">Camp</option>
                        <option value="sports">Sports</option>
                        <option value="prayers">Prayers/All Night</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Status</label>
                    <select className="form-control" {...register('status')}>
                        <option value=''>--select status--</option>
                        <option value='ongoing'>Ongoing</option>
                        <option value='upcoming'>Upcoming</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Date</label>
                    <input type="date" {...register('date')} className="form-control"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Time</label>
                    <input type="time" {...register('time')} className="form-control"/>
                </div>
                </div>
                <Button btnText='Add Event' cssClass='btn-primary my-5'/>
                <button className="w-full p-1 my-1 text-white bg-red-500 rounded-md" onClick={closeModal}>Close</button>
            </form>
        </div>
    </Modal>
  )
}

export default AddEventModal