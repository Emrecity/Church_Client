import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MemberLoginSchema } from '../helpers/Schemas'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { apiResponseHandler } from '../helpers/ApiHandler'
import toast from 'react-hot-toast'
import { routes } from '../helpers/routes'

const MembersLoginForm = () => {

  const navigate = useNavigate()

  const {register,handleSubmit,reset,formState:{isDirty}}= useForm({
    resolver: yupResolver(MemberLoginSchema)
  })

  const {mutate,isPending} = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post('/api/v1/member/login', data)
      if(res?.status == 200){
        toast.success('Login Successful')
        localStorage.setItem('id',res.data.data._id)
        navigate(routes.MEMBER_DASHBOARD)
      }
      if(res?.status == 400){
        toast.error('Login Failed')
      }
      apiResponseHandler(res)
    }
  })

  return (
    <form onSubmit={handleSubmit((data)=>mutate(data))}>
      <div className="p-6.5">
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your firstname"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register('firstname')}
          />
        </div>

        <div className="my-5">
          <label className="mb-2.5 block text-black dark:text-white">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            {...register('phone')}
          />
        </div>

        <div className="mt-5 mb-5.5 flex items-center justify-between">
          <label htmlFor="formCheckbox" className="flex cursor-pointer">
            <div className="relative pt-0.5">
              <input
                type="checkbox"
                id="formCheckbox"
                className="sr-only taskCheckbox"
              />
              <div className="flex items-center justify-center w-5 h-5 mr-3 border rounded box border-stroke dark:border-strokedark">
                <span className="text-white opacity-0">
                  <svg
                    className="fill-current"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                      fill=""
                    />
                  </svg>
                </span>
              </div>
            </div>
            <p>Remember me</p>
          </label>

          <Link to="#" className="text-sm text-primary hover:underline">
            Forget password?
          </Link>
        </div>

        <button className="flex justify-center w-full p-3 my-3 font-medium bg-blue-500 rounded btn text-gray hover:bg-blue-600" disabled={isPending}>
          Sign In
        </button>
      </div>
    </form>
  )
}

export default MembersLoginForm