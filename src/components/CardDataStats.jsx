import React from 'react'

const CardDataStats = ({title,total,rate,children,}) => {
    return (
        <div className=" border rounded-md border-stroke bg-slate-200 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
            {children}
          </div>
    
          <div className="flex items-end justify-between px-5 mt-4">
            <div>
              <h4 className="text-4xl font-bold text-black dark:text-white">
                {total}
              </h4>
              <span className="text-lg font-medium">{title}</span>
            </div>
    
            <span
              className={`flex items-center gap-1 text-sm font-medium  `}
            >
              {rate}
    
            </span>
          </div>
        </div>
      )
}

export default CardDataStats