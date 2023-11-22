import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './layout/footer/footer'
import Header from './layout/header/header'
import MainGame from './MainGame'

function App() {

  return (
    <div className='content'>
      <Header></Header>
      <MainGame></MainGame>
      <Footer></Footer>
    </div>
  )
}

export default App
