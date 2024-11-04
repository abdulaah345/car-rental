import React from 'react'
import { Routes ,Route, Navigate} from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
import Blog from '../component/Blog'
import Blogdetalis from '../component/Blogdetalis'
import Cardetails from '../component/Cardetails'
import Carlisting from '../component/Carlisting'
import Notfound from '../component/Notfound'
const Routers = () => {
  return (
    <Routes>
     
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cardetails' element={<Cardetails/>}/>
    <Route path='/car/:slug' element={<Carlisting/>}/>
    <Route path='/*' element={<Notfound/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/blog/:slug' element={<Blogdetalis/>}/>



    </Routes>
         )
}

export default Routers