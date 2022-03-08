import React from 'react'
import { host_name,responsive } from './Keys'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function OurStory(props) {
    const ShowTeam=()=>{
        return(
            props.ourList.map((item)=>{
                return (
                <div className='home-part-7-content'>
                    <div className='home-part-7-img'>
                        <img src={`${item.img}`} alt="Amit" />                   
                    </div>
                    <div className="part-7-name-tag">
                        {item.name}   
                    </div>
                </div>
                    )
        })
        )
    }
  return (
    <>
    <div className='home-part-4-heading'>
                <div className='home-h4'>
                {props.heading}
                </div>
                <div className='border-line'>

                </div>
            </div>
    <Carousel responsive={responsive} stopOnHover={false} infinite={true} arrows={true} keyBoardControl={false} autoPlay={true} autoPlaySpeed={3000} draggable={false} >
        {ShowTeam()}
    </Carousel>
    </>
  )
}
