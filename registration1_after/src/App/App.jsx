import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from '../components/EmpRegistration'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Registration />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App