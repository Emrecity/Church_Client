import Button from "../../../components/Button"
import Modal from "../../../components/Modal"
import { useForm } from "react-hook-form"


const AddEventModal = ({closeModal}) => {
    const {register,handleSubmit} = useForm()
  return (
    <Modal closeModal={closeModal} modal_id='add_event_modal'>
        <div className="p-5 overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <h1 className="text-2xl text-center text-blue-500 poppins-bold">New Event</h1>
            <form onSubmit={handleSubmit((data)=>console.log(data))}>
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
                        <option value="camp">Camp</option>
                        <option value="sports">Sports</option>
                        <option value="prayers">Prayers/All Night</option>
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label>Status</label>
                    <select className="form-control" {...register('status')}>
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
            </form>
        </div>
    </Modal>
  )
}

export default AddEventModal