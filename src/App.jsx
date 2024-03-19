import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import FoodLaundry from './pages/FoodLaundry/FoodLaundry'
import Laundry from './pages/Laundry/Laundry'
import Food from './pages/Food/Food'



const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<FoodLaundry/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/food/:RestaurantID' element={<Food/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/laundry' element={<Laundry/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
