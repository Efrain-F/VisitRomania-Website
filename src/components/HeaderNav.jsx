
import "./../styles/header.css"
import { BiMenu } from 'react-icons/bi';
import gsap from "gsap";
import { useState } from "react";


function HeaderNav() {


  const [menuVisible,setMenuVisible] = useState(false)
  const [selectElmt,setSelectElmt] = useState()


  let mm = gsap.matchMedia();


  mm.add("(min-width:800px)",()=>{
    gsap.to(".header-nav-list",{
      x:0,
      opacity:1,
      duration:1.4
    })
    if(selectElmt){
      gsap.to(".header-boxSelect",{
        x:selectElmt.offsetLeft,
        y:selectElmt.offsetHeight,
        width:selectElmt.offsetWidth,
      })
    }else{
      gsap.to(".header-boxSelect",{
        x:0,
        y:"36px",
        width:"74px",
      })
    }
  })
  let ctx = gsap.context((self)=>{

    self.add("showMenu",()=>{
      gsap.to(".header-nav-list",{
        x:-220,
        opacity:1,
        duration:.5
      })
    })
    self.add("hiddenMenu",()=>{
      gsap.to(".header-nav-list",{
        x:0,
        opacity:0,
        duration:.5
      })
    })
  })

  function showMenu(){
    menuVisible?ctx.hiddenMenu():ctx.showMenu()
    setMenuVisible(!menuVisible)
  }

  function selectNav(e){
    gsap.to(".header-boxSelect",{
      x:e.target.offsetLeft,
      y:e.target.offsetHeight,
      width:e.target.offsetWidth,
    })
    ctx.hiddenMenu()
    setMenuVisible(!menuVisible)
    setSelectElmt(e.target)
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <a className="header-nav-logo" href="#">Visit Romania</a>
        <BiMenu onClick={showMenu} className="header-nav-menu"/>
        <ul className="header-nav-list">
          <div className="header-boxSelect"></div>
          <li><a onClick={selectNav} href="#home">Home</a></li>
          <li><a onClick={selectNav} href="#info">Info</a></li>
          <li><a onClick={selectNav} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;