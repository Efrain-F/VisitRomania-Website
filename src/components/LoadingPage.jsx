import gsap from "gsap";
import { useEffect } from "react";

function LoadingPage() {

  useEffect(()=>{
    let ctx = gsap.context(()=>{

      let tl = gsap.timeline()

      tl.to(".loadingPage-title",{
        height:"0px",
        delay:1.2,
        duration:1
      })
      tl.to(".loadingPage",{
        opacity:0,
        delay:.1,
        duration:1
      })
      tl.to(".loadingPage",{
        display:"none"
      })
    })
    return ()=>ctx.revert()
  },[])

  return (
    <div className="loadingPage">
      <h1 className="loadingPage-title">Visit Romania</h1>
    </div>
  );
}

export default LoadingPage;