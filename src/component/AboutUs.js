import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import "../CSS/aboutus.css"
import {host_name} from "./Keys"
export default function AboutUs() {
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
       <div className="aboutus-body">
        <div className='part-1-lenstart'>
            <div className='part-1-lenstart-content'>
                <div className='home-h1'>
                what we're about
                </div>
                <div className='home-h2'>
                about us
                </div>
                
                
            </div>
            <div className='part-1-lenstart-img-about'>
                <img src={`${host_name}/aboutus.jpg`} alt=""/>
            </div>
        </div>
          <div className="part-1-aboutus">
              <div className='part-1-content-aboutus'>
              It focuses on issues of Innovation,Creativity and Entrepreneurship.It
              leads the students through the entireprocess of creating a start-up
              from an idea.Whetheryou’restarting out,or scaling to meet demand,
              connect with the right people,that will help your startup grow.
              What makes Startup Saturday different is that the desire to launch
              ideas comes from a fundamental rooting in improving and
              contributing to public service.Startup Saturday is a place where social,
              environmental,and public good for-profit businesses can be fostered.
              Where business models not only are limited to balancesheets,but to
              the betterment of India and the globe as a whole.
              </div>
              
          </div>
          <div className="part-2-aboutus">
              
              <div className="part-2-content-aboutus">
              Ideas don’t matter , execution does.But even the world’s best
              enterpeneur would fail waith fundamentally flawed startup ideas.
              Entrepreneurship is a journey,and the second mission is to
              strengthen ideation,strategy,and execution within
              entrepreneurially minded people across the world.We will be
              taking people from wherever they are on in this path and provide
              mentorship,support,and learning to reach the next level.
              </div>
          </div>
       </div>
     )
}