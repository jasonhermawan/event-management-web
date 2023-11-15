import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import LandingPage from '../src/pages/Landing'
import EventPage from '../src/pages/EventPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CreateEvent from './pages/CreateEvent'
import Explore from './pages/Explore'
import Checkout from './pages/Checkout'
import PromotorPage from './pages/PromotorPage'

function App() {

  return (
   <div>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/explore' element={<Explore />}/>
      <Route path='/event' element={<EventPage />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/create-event' element={<CreateEvent />}/>
      <Route path='/promotor' element={<PromotorPage />}/>
    </Routes>
   </div>
  )
}

export default App
