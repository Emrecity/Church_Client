import React from 'react'

const Timeline = () => {
    const data =[{position:'Agent-in-charge',name:'Cat. Augustine K. Arthur'},{position:'Senior Presbyeter',name:'Mr. Joseph Owusu Agyemang'},{position:'Session Clerk',name:'Samuel Baffour Appiah'}]
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  {
    data.map((item,index)=>{
        return(
            <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#00f"
        className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className={`mb-10 p-5 rounded-md space-y-5 bg-gradient-to-br ${index%2==0?"md:timeline-end from-slate-400 via-white to-blue-400":'timeline-start from-red-400 via-white to-blue-400'}`}>
      <time className="font-mono italic">{item.position}</time>
      <div className="text-lg font-black">{item.name}</div>
      {item.desc}
    </div>
    <hr />
  </li>
        )
    })
  }
</ul>
  )
}

export default Timeline