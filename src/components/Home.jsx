import "../styles/home.css"
import { BsCloudDrizzle } from 'react-icons/bs';
import HeaderNav from "./HeaderNav";

import gsap from "gsap";
import { useEffect } from "react";



function Home() {

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.fromTo(".home-title",{
        y:-70, 
        opacity:0
      },{
        y:0,
        opacity:1,
        duration:1.4,
        delay:.6
        
      })
      gsap.fromTo(".home-temp",{
        opacity:0
      },{
        opacity:1,
        duration:2,
        delay:.6
      })
    })
    return()=>ctx.revert()
  },[])


  return (
    <>
      <img className="home-fondo" src="./assets/fondo.jpg" alt="" />
      <section id="home" className="section-page home">
        <HeaderNav></HeaderNav>
        <div className="home-title">
          <h1>Hoia-Baciu Paranormal Forest</h1>
        </div>
        <div className="home-temp">
          <span>Lorem ipsum dolor, sit amet </span>
          <div className="home-temp-num">
            <BsCloudDrizzle className="home-temp-num-icon"/>
            <span>11°C</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;