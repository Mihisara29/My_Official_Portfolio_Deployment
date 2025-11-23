import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import GradientSpheres from './components/GradientSpheres'
import TechStack from './sections/TechStack'
import Project from './sections/Project'
import Contact from './sections/Contact'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'


const App = () => {
  return (
    <div className="div">
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar/>
      <SideBar/>
      <Hero/>
      <About/>
      <TechStack/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App