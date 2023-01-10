import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const route = () => {
  return (
    <>
        <Navbar/>
      <Routes>
      <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
    </>
  )
}

export default route
