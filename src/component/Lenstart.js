import React from 'react'
import { host_name } from './Keys'
import Footer from "./Footer"
import Header from "./Header"
import "../CSS/lenstart.css"
export default function Lenstart() {
  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  )
}

 
function MainContent(){
  return(
    <div className='main-home-content'>
        <div className='part-1'>
        <div className='part-1-content'>
                    <div className='part-1-text-1'>Start thinking to build a innnovative product.</div>
                    <div className='part-1-text-2'>LenStart @ LensKart</div>
                    <div className='part-1-text-3'>Lenstart goal is to empower all the employees to
                    become intrapeneurs.A chance to build the tools and
                    framework to turn great ideas into profitable offers.</div>
                <div className='part-1-btn'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScaZ-oRiSEBFccPTy2JJl7oW2vjLP38R5zKONZwlgmu14mIOg/viewform?vc=0&c=0&w=1&flr=0' target="_blank"><button>Registration Form</button></a>
                </div>
                </div>
                <div className='part-1-img'>
                        <img src={`${host_name}/lenstart1.jpg`} alt="" />
                </div>
        </div>
        <div className="part-2-heading">
                    <div className='heading-text'>
                    Four Verticals At Lenstart
                    </div>
                    <div className='heading-line'>

                    </div>
        </div>
        <div className='part-2-lenstart'>
            <div className='part-2-content-1'>
              <div className='part-2-content-1-img'>
                  <img src={`${host_name}/lenstart2.jpg`} alt="" />
              </div>
              <div className='part-2-content-1-content'>
                  <div>
                  Business Idea
                  </div>
                  You have an innovative idea for a
                  unique product/service that solves a big
                  customer problem and can potentially drive
                  signficant change in any sector.This can be a
                  product/service idea related or unrelated to
                  Lenskart.
                  <span>Example </span> An AI assistant that files your taxes for
                  you.
              </div>
            </div>
            <div className='part-2-content-2'>
            <div className='part-2-content-2-img'>
                  <img src={`${host_name}/lenstart3.jpg`} alt="" />
              </div>
              <div className='part-2-content-2-content'>
                    <div className='part-2-content-2-content-1'>
                       <div>
                       Process Enhancement
                       </div>
                       You have an innovative idea to
                        improve the efficiency or structure of an existing
                        process at Lenskart.
                        <span>Example</span>An idea that reduce sour delivery time
                        or improves the quality of our lenses/frames.
                    </div>
                    <div className='part-2-content-2-content-2'>
                          <div>
                          Life At Lenskart
                          </div>
                          You have an idea to enchance the life
                          at Lenskart or bring the community together.
                          <span>Example</span>Starting a community like
                           @Women Of Lenskart or @Pride at Lenskart.
                    </div>
              </div>
            </div>
            <div className='part-2-content-3'>
            <div className='part-2-content-3-img'>
                  <img src={`${host_name}/lenstart4.jpg`} alt="" />
              </div>
              <div className='part-2-content-3-content'>
                   <div>
                     Others
                   </div>
                   Any thing other than the above,e.g.a
                   new idea for an event/initiative at Lenskart.
                   <span>Example</span>@StartupSaturdays , a platform to pitch
                   your idea to founders or @KeepInTouchDays , a
                   buddy system for new parents who are on leave.
              </div>
            </div>
        </div>
    </div>
  )
}