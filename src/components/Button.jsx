import classNames from 'classnames'
import React from 'react'
import { Circles } from 'react-loader-spinner'

const Button = ({ isPending, btnText, cssClass, handleClick, svgIcon }) => {
  return (
    <div>
    <button type='submit' className={`${cssClass} ${classNames({
        'border-2 w-full py-2 rounded-md hover:bg-blue-700  text-white': true,
        'disabled': isPending,
    })}`} onClick={handleClick}>
        {
            isPending ? <div className='flex items-center justify-center'>
                <Circles
                    height="20"
                    width="20"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div> :
                <>
                    {svgIcon && svgIcon}
                    {btnText}
                </>
        }
    </button>
</div>
  )
}

export default Button