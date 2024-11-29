import Button from "../../../components/Button"
import Modal from "../../../components/Modal"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { editEventSchema } from '../../../helpers/Schemas'
import { useState,useEffect } from "react"
import { useMutation,useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import axios from "axios"
import { apiResponseHandler } from '../../../helpers/ApiHandler'


const EditEventModal = ({closeModal, data}) => {

    const {register,handleSubmit,reset} = useForm({
        resolver: yupResolver(editEventSchema)
    })

    const id = data?.id
    let date = new Date(data?.date)
    let time  = data?.time

    useEffect(()=>{
        reset()
    },[data.id])

    const handleClose =()=>{
        setDateToggle(false)
        setTimeToggle(false)
        closeModal()
      }

    const [dateToggle,setDateToggle] = useState(false)
    const [timeToggle,setTimeToggle] = useState(false)

    const queryClient = useQueryClient()
    const{mutate} = useMutation({
        mutationKey:[data?.id],
        mutationFn: async (data) => {
            const res = await axios.patch(`api/v1/event/${data?.id}`,data)
            if(res?.status == 200){
                toast.success('Event Updated Successfully',500)
                queryClient.refetchQueries({ queryKey: ['events'] })
                closeModal()
            }
            apiResponseHandler(res)
        }
    })

    const submitHandler = (data)=>{
        if(!dateToggle){
            data.date = date.toDateString()
        }
        if(!timeToggle){
            data.time = time
        }
        data.id = id
        mutate(data)
        closeModal()
    }

  return (
    <Modal closeModal={handleClose}  modal_id='edit_event_modal'>
        <div className="p-5 overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <h1 className="text-2xl text-center text-blue-500 poppins-bold">Edit Event</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col poppins-regular-italic gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label>Title</label>
                    <input type="text" defaultValue={data?.title} {...register('title')} placeholder="Enter title of the event" className="form-control"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Description</label>
                    <textarea className="form-control" defaultValue={data?.description} {...register('description')} rows={5} placeholder="Enter description">
                    </textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Venue</label>
                    <input type="text" defaultValue={data?.venue} {...register('venue')} placeholder="Enter venue" className="form-control"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Speaker</label>
                    <input type="text" defaultValue={data?.speaker} {...register('speaker')} placeholder="Enter speaker name" className="form-control"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Category</label>
                    <select className="form-control" {...register('category')}>
                        <option value={data.category}>{data.category}</option>
                        <option value="camp">Camp</option>
                        <option value="sports">Sports</option>
                        <option value="prayers">Prayers/All Night</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Status</label>
                    <select className="form-control" {...register('status')}>
                        <option value={data?.status}>{data?.status}</option>
                        <option value='ongoing'>Ongoing</option>
                        <option value='upcoming'>Upcoming</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Date</label>
                    {!dateToggle?<input type="text" value={date.toDateString()} onChange={(e)=>setDateToggle(true)} className="form-control"/>:
                    <input type="date"  className="form-control" {...register('date')} />}
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Time</label>
                    {!timeToggle?<input type="text" value={data?.time} onChange={(e)=>setTimeToggle(true)} className="form-control"/>:
                    <input type="time"  className="form-control" {...register('time')} />}
                </div>
              </div>
              <Button btnText='Update Event' cssClass='btn-primary my-5'/>
              <button type="button" className="w-full p-1 my-1 text-white bg-red-500 rounded-md" onClick={handleClose}>Close</button>
            </form>
        </div>
    </Modal>
  )
}

export default EditEventModal