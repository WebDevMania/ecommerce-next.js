import React, { useState } from 'react'
import { useAuthContext } from '../../ctx/authContext'

const Register = () => {
    const [data, setData] = useState({})
    const {handleRegister} = useAuthContext()

    const handleChange = (e) => {
        setData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className='bg-orange-500 h-screen w-screen flex justify-center items-center'>
            <div className="h-[45vh] w-[25vw] border border-orange-600 rounded-xl">
                <h2 className="text-center mt-6 text-2xl text-[#efefef]">Register</h2>
                <form onSubmit={(e) => handleRegister(e, data)} className="flex flex-col gap-6 items-center my-10">
                    <input className="pl-2 rounded-md placeholder:text-[15px] " onChange={handleChange} type="text" name="username" placeholder='Username' />
                    <input className="pl-2 rounded-md placeholder:text-[15px] " onChange={handleChange} type="email" name="email" placeholder='Email' />
                    <input className="pl-2 rounded-md placeholder:text-[15px] " onChange={handleChange} type="password" name="password" placeholder='Password' />
                    <button className="bg-white text-orange-400 px-6 py-2 rounded-xl mt-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register