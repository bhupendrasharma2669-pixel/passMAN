
import { v4 as uuidv4 } from 'uuid';

import { MdLibraryAdd } from "react-icons/md";


import { useRef, useState, useEffect } from 'react'
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';





const manager = () => {
    const Ref = useRef();
    const passwordRef = useRef();

    const [form, setform] = useState({ site: "", username: "", Password: "" })
    const [passwordArray, setpasswordArray] = useState([])



    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }


    }, [])



    const showPassword = () => {
        passwordRef.current.type = "password"
        if (Ref.current.src.includes("image2.png.png")) {
            Ref.current.src = "image.png.png"

        }
        else {
            Ref.current.src = "image2.png.png"
            passwordRef.current.type = "text"
        }
    }
    const copyText = (text) => {
        toast('copied to clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }

    const savePassword = () => {
         if(form.site.length > 3 && form.username.length > 3 && form.Password.length >3){
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log(...passwordArray, form)
        setform({ site: "", username: "", Password: "" })
         toast('password saved successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

    });}
    else{ 
        toast('Error: password not saved')
    }
      
    
    
    
   
    }
    const deletePassword = (id) => {
        console.log("deleting password with id", id)
        let c = confirm("do you really want to delete this password?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        
        }
         toast('password deleted ', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }
    const editPassword = (id) => {
        console.log("editing password with id", id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        
      
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        

        <div className='mb-16'>
            
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="bounce"
            />

            <div className="md:container mt-15  mx-auto   justify-center items-center flex flex-col  ">
                <div className="">
                    <h1 className="text-2xl flex justify-center font-bold">
                        <span className='text-green-700 text-2xl' > &lt; </span>
                        Pass
                        <span className='text-green-700 text-2xl' >MAN /&gt;</span>
                    </h1>
                    <p className="text-lg  text-green-900">Your own password manager</p>
                </div>
                <div className="flex  flex-col   ">
                    <input value={form.site} onChange={(e) => setform({ ...form, site: e.target.value })} className="border m-3 bg-white border-green-500 text-black p-4 py-1 w-[60vw] rounded-xl" type="text" name="site" placeholder="Enter website URL" id="" />
                </div>
                <div className="flex flex-col md:flex md:flex-row gap-3  m-1">
                    <input value={form.username} onChange={handleChange} className="border-green-500 w-[60vw] bg-white px-3 text-black border md:w-[47.59vw] p-1 m-1  rounded-xl" type="text" name="username" placeholder="Enter username" />
                    <div className='relative'> <input ref={passwordRef} value={form.Password} onChange={(e) => setform({ ...form, Password: e.target.value })} className="border-green-500 bg-white text-black border md:w-[11vw] w-[60vw] p-1 m-1 rounded-xl" type="password" name="Password" placeholder="Enter password" />
                        <span className='absolute right-4  cursor-pointer' onClick={showPassword}><img className="w-4 sticky h-4 mt-3.5" ref={Ref} src="public/image.png.png" alt="eye" /></span>
                    </div>
                </div>
                <button onClick={savePassword} className=" border border-green-900 bg-green-500 flex items-center gap-1 text-mist-900 hover:bg-green-600  p-2 px-4 rounded-3xl m-4 "><MdLibraryAdd />Save</button>
            </div>
            <div className="passwords m-2 md:mx-60  ">
                <h1 className=' text-2xl py-2 font-semibold '>  Your passwords </h1>
                {passwordArray.length === 0 && <div> No Passwords To Show </div>}
                {passwordArray.length != 0 &&

                    <table className="table-auto w-full overflow-hidden rounded-lg">
                        <thead className='bg-green-700  text-white'>
                            <tr>
                                <th className='p-2'>Site</th>
                                <th className='p-2'>Username</th>
                                <th className='p-2'>Password</th>
                                <th className='p-2'>Actions</th>

                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='text-center w-16 py-1  border-white border'><a href={item.site} target="_blank">{item.site}</a>
                                            <button className='items-center  hover:scale-120 transition-all cursor-pointer'><img className='h-3.5 ml-3 w-3.5' onClick={() => { copyText(item.site) }} src="copy.png" alt="" /></button>

                                        </td>
                                        <td className='text-center w-16 py-1 border-white border'>{item.username}
                                            <button className='items-center  hover:scale-120 transition-all cursor-pointer'><img className='h-3.5 ml-3 w-3.5' onClick={() => { copyText(item.username) }} src="copy.png" alt="" /></button>
                                        </td>
                                        <td className='text-center w-16 py-1 border-white border'>{item.Password}
                                            <button className='items-center  hover:scale-120 transition-all cursor-pointer'><img className='h-3.5 ml-3 w-3.5' onClick={() => { copyText(item.Password) }} src="copy.png" alt="" /></button>
                                        </td>
                                        <td className='text-center w-16 py-1   border-white border'>
                                            <button onClick={() => { editPassword(item.id) }} className="  "> <img className="h-5 hover:scale-120 transition-all  w-5" src="edit.png" alt="" />
                                            </button>  <button onClick={() => { deletePassword(item.id) }} className=""><img className="h-5 ml-2 w-5 hover:scale-120 transition-all" src="bin.png" alt="" /></button>
                                        </td>
                                    </tr>
                                )
                            })}





                        </tbody>
                    </table>}
            </div>
        </div>
    )
}

export default manager
