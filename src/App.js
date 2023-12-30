import React from 'react'
import Login from './components/Login'
import Signup from './components/SignUp'
import "./App.css"
import "./components/style.css"
import Forgot from './components/Forgot'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Task from './components/Task'
import Profile from './components/Profile'
import Contactus from './components/Contactus'
import Dashboard from './components/Dashboard'
import Referred_users from './components/Referred_users'

const App = () => {
  return (
    <div>
      <Navbar />
      <center>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />

          <Route path='/Signup' element={<Signup />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Task' element={<Task />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Referred_users' element={<Referred_users />} />




        </Routes>
      </center>

    </div>
  )
}

export default App
