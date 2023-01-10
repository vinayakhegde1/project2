import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate=useNavigate();
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("Enter correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div className='grid grid-cols-1 h-screen w-full'>
            <div className='hidden '>
            </div>
            <div className='bg-black flex flex-col justify-center'>
                <form onSubmit={loginHandle} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl text-red-600 font-bold text-center'>Sign In</h2>
                    <div className= 'name flex flex-col text-white py-2'>
                        <label>Username</label>
                        <input className='rounded-lg bg-black mt-2 p-2 focus:border-blue-500 focus:bg-gray-700 focus:outline-none' type="text" onChange={userHandler} /> 
                        {userErr?<span><p>User Not Valid</p> </span>:""}
                    </div>
                    <div className=' password flex flex-col text-white py-2'>
                        <label>Password</label>
                        <input className='p-2 rounded-lg bg-black mt-2 focus:border-blue-500 focus:bg-gray-700 focus:outline-none' type="password" onChange={passwordHandler}/>
                        {passErr?<span><p>Password Not Valid</p></span>:""}
                    </div>
                    <button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'onClick={()=>navigate('/')}>Sign In</button>
                    
                </form>
            </div>
        </div>
      )
}

export default Signin
