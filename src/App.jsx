import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import Player from './pages/Player'
const App = () => {
  return (
    <div>
 <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
</Routes>
  </div>
  )
}

export default App