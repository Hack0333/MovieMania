import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Movies from './pages/Movies'
import AuthPage from './pages/Private'
import Start from './pages/Start'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/movies' element={
        <AuthPage>
          <Movies/>
        </AuthPage>
      }/>
    </Routes>
  )
}

export default App