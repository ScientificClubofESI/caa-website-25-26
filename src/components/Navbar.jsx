"use client"
import "./NavBar.css"
import { useEffect, useState } from "react";
export default function Navbar() {

  const [mobileView , setMobileView] = useState(false)
  const [toggle , setToggel] = useState(false)

  //track mobile view
  useEffect(()=>{
    const media = window.matchMedia("(max-width:750px)");
    const handleChange = (e)=>{
      if(!e.matches){
        setToggel(false)
      }
      setMobileView(e.matches)
    }
    setMobileView(media.matches);
    media.addEventListener("change" , handleChange);
    return () => media.removeEventListener("change", handleChange);
  },[])

  return (
    <section>
      <div className="NavBar justifyцентр " style={!toggle ? {backgroundColor : "white"} : {backgroundColor :"#D9F3B9"}}> 
         <div className="caaLogo">
              <img src="/logo.png" alt="CAA Logo" />
          </div>  
     
        { mobileView ? 

        (
            <div className="hamMenu" onClick={()=>setToggel((prev)=>!prev)}>
              {toggle ? 
              <div className="stackT">
                  <div className="plate1T">
                  </div>
                  <div className="plate2T">
                  </div>
                  <div className="plate3T">
                  </div>
                 
              </div>
                :
                <div className="stack">
                  <div className="plate1">
                  </div>
                  <div className="plate2">
                  </div>
                  <div className="plate3">
                  </div>
                </div>}
            </div>

          ) :(
            <>
            <div className="nav-links">
                  <a href="#about">About</a>  
                  <a href="#partners">Partners</a>
                  <a href="#workshops">Workshops</a>
              <a href="#wilayas">Wilayas</a>
              <a href="#faq">FAQs</a>
                  <a href="#contact">Contact</a>
                
              </div>
          <div className="register">
                <button className="registerBtn">Register</button>
          </div>
            </>
          
          )

        }
        

      
      </div>
      {toggle && mobileView &&
       <div className="nav-links-toggled" onClick={()=>setToggel(false)}>              
                  <a href="#about">About</a> 
                  <a href="#partners">Partners</a>
                  <a href="#workshops">Workshops</a>
                  <a href="#wilayas">Wilayas</a>
                  <a href="#faq">FAQs</a>
                  <a href="#contact">Contact</a>
        </div>
        } 
    </section>
  );
}
