import "./../styles/main.css"
import { BiMapAlt } from 'react-icons/bi';
import { RiMapPin2Fill } from 'react-icons/ri';
import { MdNote } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { GrLinkTop } from 'react-icons/gr';
import { useEffect } from "react";

import gsap from "gsap";


function Main() {


  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.fromTo(".atajoHome",{
        x:100,
        opacity:0
      },{
        scrollTrigger:{
          trigger:".main",
          start:"top center",
          end:"top center",
          toggleActions:"restart none reverse none",
        },
        x:-20,
        opacity:1,
        position:"fixed",
        duration:1
      })

      gsap.fromTo(".main-visit",{
        opacity:0,
        x:-20
      },{
        scrollTrigger:{
          trigger:".main-visit",
          start:"130 bottom",
          end:"bottom center",
        },
        ease: "power1.out",
        opacity:1,
        duration:1,
        x:0
      })
      gsap.fromTo(".main-paranormal",{
        opacity:0,
        x:20
      },{
        scrollTrigger:{
          trigger:".main-paranormal",
          start:"130 bottom",
          end:"bottom center",
        },
        ease: "sine.out",
        opacity:1,
        duration:1,
        x:0
      })
      gsap.fromTo(".main-discoveries",{
        opacity:0,
        x:-20
      },{
        scrollTrigger:{
          trigger:".main-discoveries",
          start:"130 bottom",
          end:"bottom center",
        },
        ease: "sine.out",
        opacity:1,
        duration:1,
        x:0
      })


    })
    return ()=>ctx.revert()
  },[])

  return (
    <section className="section-page main" id="info">
      <section className="main-visit main-section">
        <div className="main-visit-title">
          <h2>Visiting the Hoia-Baciu Forest</h2>
          <div className="main-title-decoration"></div>
        </div>
        <div className="main-visit-info">
          <footer>
            <div className="main-visit-info-foot-dt">
              <RiMapPin2Fill className="main-visit-info-foot-dt-icon"/>
              <span>Lorem ipsum dolor sit, amet </span>
            </div>
            <div className="main-visit-info-foot-dt">
              <MdNote className="main-visit-info-foot-dt-icon"/>
              <span>46'46'26'N 23'3f'19°E </span>
            </div>
            <div className="main-visit-info-foot-dt">
              <BiMapAlt className="main-visit-info-foot-dt-icon"/>
              <span> 295 hectores (729.0) </span>
            </div>
          </footer>
          <main className="main-visit-info-main">
            <div className="main-visit-info-main-parrf">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsa qui? Id perferendis amet dolorem accusamus expedita qui tenetur aperiam, beatae facere mollitia officia ipsa accusantium vero similique porro aspernatur?</p>
            </div>
            <div className="main-visit-info-main-parrf">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae unde id eveniet, exercitationem quam ad consequuntur expedita animi minus iste, aliquam est ipsum nesciunt officiis sed tempora omnis tempore molestiae.</p>
              <button className="main-visit-info-main-parrf-morebtn">
                <span>Read more</span>
                <BsArrowRight className="main-visit-info-main-parrf-morebtn-icon"/>
              </button>
            </div>
          </main>
        </div>
      </section>
      <section className="main-paranormal main-section">
        <section className="main-paranormal-sect">
          <div className="main-visit-title">
            <h2>Visiting the Hoia-Baciu Forest</h2>
            <div className="main-title-decoration"></div>
          </div>
          <main className="main-visit-main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem ratione voluptatum quis consequuntur autem corporis esse. Laboriosam dolorem veritatis nesciunt perferendis. Quos ea aspernatur eum dolore eius nam praesentium?</p>
          </main>
        </section>
        <img src="./assets/img2.jpg" alt="" />

      </section>
      <section className="main-discoveries main-section">
        <section  className="main-discoveries-sect">
          <div className="main-discoveries-title">
            <h2>Discoveries</h2>
            <div className="main-title-decoration"></div>
          </div>
          <main className="main-discoveries-main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem ratione voluptatum quis consequuntur autem corporis esse. Laboriosam dolorem veritatis nesciunt perferendis. Quos ea aspernatur eum dolore eius nam praesentium?</p>
            <button className="main-visit-info-main-parrf-morebtn">
              <span>Read more</span>
              <BsArrowRight className="main-visit-info-main-parrf-morebtn-icon"/>
            </button>
          </main>
          
        </section>
        <img src="./assets/img1.jpg" alt="" />
      </section>
      <a href="#home" className="atajoHome">
        <GrLinkTop className="atajoHome-icon"/>
      </a>
    </section>
  );
}

export default Main;