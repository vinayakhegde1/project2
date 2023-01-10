import React,{useState}from 'react'
import{AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav =() =>{
    setNav(!nav);
  };  
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-center text-white'>
      <h1 className='w-full text-4xl font-bold text-[#f80505]'>OTT TV.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Movies</li>
        <li className='p-4'>Series</li>
        <li className='p-4'>Create</li>
        <li className='p-4'>Search</li>
        <li button className= '  p-2 rounded cursor-pointer text-red-600'onClick={()=>navigate('/Signin')}>SignIn</li>
        <li button className=' p-2 rounded cursor-pointer text-red-600'onClick={()=>navigate('/Signup')}>SignUp</li>
        <div>
      </div>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-4xl font-bold text-[#fb2c2c] m-4'>OTT TV.</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b bprder bg-gray-900'>Home</li>
        <li className='p-4 border-b bprder bg-gray-900'>Movies</li>
        <li className='p-4 border-b bprder bg-gray-900'>Series</li>
        <li className='p-4 border-b bprder bg-gray-900'>Create</li>
        <li className='p-4 border-b bprder bg-gray-900'>Search</li>
        </ul>
      </div>
      </div>
  )
}

export default Navbar
