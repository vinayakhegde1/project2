import React from 'react'
import Signup from './components/Signup';
//import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';


const App = () => {
  return (
    <>

    
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='/Home' element={<Home/>}/>
    </Routes>
    </>
  )
}
export default App;