import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { host_name } from './Keys'
import "../CSS/lenstart.css"
export default function Lenstart() {
  return (
    <>
    <Header/>
    <MainComponent/>
    <Footer/>
    </>
  )
}


function MainComponent(){

    return(

        <div className='lenstart-main-body'>
            
        <div className='part-1-lenstart'>
            <div className='part-1-lenstart-content'>
                <div className='home-h1'>
                Start thinking to build a innnovative product.
                </div>
                <div className='home-h2'>
                LenStart @ LensKart
                </div>
                <div className='home-h3'>
                Lenstart goal is to empower all the employees to
                    become intrapeneurs.A chance to build the tools and
                    framework to turn great ideas into profitable offers.
                </div>
                <div className='home-part-3-btn'>
                <a rel="noreferrer" href='https://g0mq6dwc1y3.typeform.com/to/QhLha4ci' target="_blank">
                        <button style={{fontSize:25}} className='lenstart-btn'>Registration Form</button>
                    </a>
            </div>
            </div>
            <div className='part-1-lenstart-img'>
                <img src={`${host_name}/lenstarthome.jpg`} alt=""/>
            </div>
        </div>
        <div className='home-part-4-heading'>
                <div className='home-h4'>
                four verticals at Lenskart
                </div>
                <div className='border-line'>

                </div>
            </div>

        <div className='part-2-lenstart'>
            <div className='part-2-main-lenstart'>
                <div className='vertical-line'>

                </div>
                <div className='lenstart-icon'>
                    <img src={`${host_name}/business idea icon.png`} alt=""/>
                </div>
                <div className='lenstart-part-2-content'>
                    <div className='heading'>
                    Business Idea
                    </div>
                    <div className='main-text'>
                    You have an innovative idea for a
                  unique product/service that solves a big
                  customer problem and can potentially drive
                  signficant change in any sector.This can be a
                  product/service idea related or unrelated to
                  Lenskart.
                  <br/>
                  <span>Example </span> An AI assistant that files your taxes for
                  you.
                    </div>
                </div>
            </div>
            <div className='part-2-main-lenstart'>
                <div className='vertical-line'>

                </div>
                <div className='lenstart-icon'>
                <img src={`${host_name}/process enchancement icon.png`} alt=""/>
                </div>
                <div className='lenstart-part-2-content'>
                    <div className='heading'>
                    Process Enhancement
                    </div>
                    <div className='main-text'>
                    You have an innovative idea to
                        improve the efficiency or structure of an existing
                        process at Lenskart.<br/>
                        <span>Example</span>An idea that reduce sour delivery time
                        or improves the quality of our lenses/frames.
                    </div>
                </div>
            </div>
            <div className='part-2-main-lenstart'>
                <div className='vertical-line'>

                </div>
                <div className='lenstart-icon'>
                <img src={`${host_name}/life at lenskart icon.png`} alt=""/>
                </div>
                <div className='lenstart-part-2-content'>
                    <div className='heading'>
                    Life At Lenskart
                    </div>
                    <div className='main-text'>
                    You have an idea to enchance the life
                          at Lenskart or bring the community together.<br/>
                          <span>Example</span>Starting a community like
                           @Women Of Lenskart or @Pride at Lenskart.
                    </div>
                </div>
            </div>
            <div className='part-2-main-lenstart'>
                <div className='vertical-line'>

                </div>
                <div className='lenstart-icon'>
                <img src={`${host_name}/others logo.png`} alt=""/>
                </div>
                <div className='lenstart-part-2-content'>
                    <div className='heading'>
                    Others
                    </div>
                    <div className='main-text'>
                    Any thing other than the above,e.g.a
                   new idea for an event/initiative at Lenskart.<br/>
                   <span>Example</span>@StartupSaturdays , a platform to pitch
                   your idea to founders or @KeepInTouchDays , a
                   buddy system for new parents who are on leave.
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}