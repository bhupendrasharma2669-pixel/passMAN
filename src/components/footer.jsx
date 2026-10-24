import React from 'react'

const footer = () => {
  return (
    <div className='bg-slate-800 h-auto border-t-7 border-white fixed bottom-0 w-full flex flex-col justify-center items-center'>
      <div className='logo font-bold text-white text-2xl'>
        <span className='text-green-700  text-xl'>
          &lt;
        </span>
        <span className=''> Pass</span><span className='text-green-700  text-xl'>MAN /&gt;</span>


      </div>
         
        <div className='flex gap-2 text-white'>created with <img className='h-4.5 mt-1 mb-2 w-4.5 ' src="copyright.png" alt="" />  by BhupendraSharma</div>
      
    </div>
  )
}

export default footer
