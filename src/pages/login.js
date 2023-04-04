import React, { useState } from 'react'
import { useAuthContext } from '../../ctx/authContext'

const Login = () => {
    const [data, setData] = useState({})
    const { handleLogin } = useAuthContext()

    const handleChange = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <div className="bg-orange-400 h-screen w-screen flex justify-center items-center">
            <div className="h-[40vh] w-[20vw] border border-orange-600 rounded-xl">
                <h2 className="text-center mt-6 text-2xl text-[#efefef]">Login</h2>
                <form className="flex flex-col gap-6 items-center my-10" onSubmit={(e) => handleLogin(e, data)}>
                    <input onChange={handleChange} className="pl-2 rounded-md placeholder:text-[15px]" type="email" name="email" placeholder='Email...' />
                    <input onChange={handleChange} className="pl-2 rounded-md placeholder:text-[15px]" type="password" name="password" placeholder='Password...' />
                    <button className="bg-white text-orange-400 px-6 py-2 rounded-xl mt-12 transition-all hover:bg-[#efefef]">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login