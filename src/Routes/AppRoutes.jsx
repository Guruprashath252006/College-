import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Attendance from '../Pages/Attendance'
import Ragging from '../Pages/Ragging'
import Vision from '../Pages/Vision'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/ragging" element={<Ragging />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </>
  )
}

export default AppRoutes