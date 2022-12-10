import "./styles/index.css"

import Home from "./components/Home"
import Main from "./components/Main"
import Footer from "./components/Footer"
import LoadingPage from "./components/LoadingPage"

// librarys
import Lenis from '@studio-freight/lenis'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="App">
      <LoadingPage></LoadingPage>
      <Home></Home>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
