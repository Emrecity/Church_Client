import { useState } from "react"
import Button from "../../../components/Button"
import Modal from "../../../components/Modal"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addMemberSchema } from '../../../helpers/Schemas'

const EditMemberModal = ({closeModal,data}) => {

    const {register,handleSubmit,reset,formState:{errors}}= useForm({
        resolver: yupResolver(addMemberSchema)
   })

const [img,setImg] = useState(data?.image)
console.log(img)

  return (
    <Modal closeModal={closeModal} modal_id='edit_member_modal'>
      <div>
        <h1>Hello there {data.firstname}</h1>
        <img src={data?.image}/>
        <button className="w-full p-1 my-1 text-white bg-red-500" onClick={closeModal}>Close</button>
      </div>
    </Modal>
  )
}

export default EditMemberModal