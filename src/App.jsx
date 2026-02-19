import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import RecentWork from './Components/RecentWork'
import Behaind from './Components/Behaind'
import MyService from './Components/MyService'
import Background from './Components/Background'
import Work from './Components/Work'
import FeedBack from './Components/FeedBack'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <RecentWork/>
    <Behaind/>
    <MyService/>
    <Work/>
    <Background/>
    <FeedBack/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
