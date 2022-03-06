import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import "../CSS/testimonial.css"
import {testimonials} from "./testimonials"
export default function Testimonial() {
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
      <div className='main-testimonial-body'>
     <div className='home-part-4-heading'>
                <div className='home-h4'>
                Our Testimonial's
                </div>
                <div className='border-line'>

                </div>
            </div>
          {Object.values(testimonials).map((data)=>{
            return(
              <div className='testimonial-content-body'>
                <div className="testimonial-img">
                  <img src={data.img} alt=""/>
                </div>
                <div className='testimonial-content'>
                  <div>
                      {data.msg}
                  </div>
                  <div className='testimonial-name'>
                        {data.name}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )
}