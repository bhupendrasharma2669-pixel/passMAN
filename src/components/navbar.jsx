import React from 'react'

const navbar = () => {
    return (

        <nav className=" bg-slate-800 fixed top-0 left-0 w-full z-50 flex justify-between items-center text-white p-1">
            <div className="logo font-bold text-xl px-3">
                <span className='text-green-700  text-xl' > &lt; </span>
                Pass
                <span className='text-green-700  text-xl' >MAN /&gt;</span>
                </div>

            <ul >
                {/* <li className="nav flex gap-4 mr-5 p-2 "  >

                    <a className="hover:scale-115 transition-all" href="/">home</a>
                    <a className="hover:scale-115 transition-all" href="/about">about us</a>
                    <a className="hover:scale-115 transition-all" href="/contact">contact</a>

                </li> */}

            </ul>
            <button className='bg-green-700 ring-white ring-1 flex rounded-3xl gap-2 p-1 cursor-pointer hover:bg-green-900 mr-3'><img className='h-7 w-7  invert ' src="github.png" alt="" />Github</button>

        </nav>
    )
}

export default navbar