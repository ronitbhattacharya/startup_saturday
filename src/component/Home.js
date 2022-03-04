import React from 'react';
import Footer from "./Footer"
import Header from "./Header"
import "../CSS/home.css"
import {useHistory} from "react-router-dom"
import { host_name } from './Keys';
export default function Home() {
  return (
      <div style={{width:"100%"}}>
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
  );
}


function MainContent(){
    const history=useHistory()
    return(
        <div className='main-home-content'>
            <div className='part-1'>
                <div className='part-1-content'>
                    <div className='main-part-heading'>
                    <div className='part-1-text-2'>StartUp Saturdays</div>
                    <div className='part-1-text-1'>Grab the Opportunity</div>
                    <div className='part-1-btn'>
                <a rel="noreferrer" href='https://g0mq6dwc1y3.typeform.com/to/QhLha4ci' target="_blank">
                    <button>Apply Now</button>
                </a>
                </div>
                    </div>
                   
                </div>
                <div className='part-1-img'>
                        <img src={`${host_name}/discussion.jpg`} alt="" />
                </div>
            </div>
            <div className="intro-text">
                <div className="intro-img">
                
                </div>
            <div className='part-1-text-3'>
            If you're a budding entrepreneur or simply someone with an entrepreneurial bone in your body, you've arrived at the right place.
            <br/>
            Register your interest for Startup Saturdays by clicking the Registration Form and answering a few questions. We''ll invite the most promising ones for a free-wheeling 30-minute chat with one of the Lenskart Founders, where you can ask them anything and everything you'd like to know about building and scaling a startup from scratch. If all goes well you might get a chance for your idea to be funded and incubated by the Founders.
            <div onClick={()=>{history.push(`${host_name}/aboutus`)}}>
                Know more
            </div>
            </div>
            </div>
                <div className="part-2-heading">
                    <div className='heading-text'>
                        Meet the Co-Founder's
                    </div>
                    <div className='heading-line'>

                    </div>
                </div>
            <div className='part-2'>
                <div className='part-2-ceo-1'>
                    <div className='ceo-1-img'>
                        <img src={`${host_name}/piyush.jpg`} alt="Piyush Bansal" />
                    </div>
                    <div className='ceo-1-content'>
                    We are open to both India and global
                    listing.Right now,however,we are focused
                    towards getting to a scale and a stage
                    where we feel somewhat satisfied that we
                    have created an impact.Cureently,if you
                    look at our scale,we do not necessarily feel
                    that we have created on big dent in any
                    market.
                    <div className='ceo-name'>Peyush Bansal </div>
                    <div className='ceo-pos'> Co-Founder,CEO&CPO</div>
                    </div>
                </div>
                <div className='part-2-ceo-2'>                    
                    <div className='ceo-1-content'>
                    We are open to both India and global
                    listing.Right now,however,we are focused
                    towards getting to a scale and a stage
                    where we feel somewhat satisfied that we
                    have created an impact.Cureently,if you
                    look at our scale,we do not necessarily feel
                    that we have created on big dent in any
                    market.
                    <div className='ceo-name'>Amit Chaudhary </div>
                    <div className='ceo-pos'> Co-Founder,CEO</div>
                    </div>
                    <div className='ceo-1-img'>
                    <img src={`${host_name}/amit.jpg`} alt="Amit" />
                    </div>
                </div>
            </div>
            <div className='part-3'>
            <div className="part-2-heading">
                    <div className='heading-text' style={{textAlign:"center"}}>
                        Message From Co-Founder
                    </div>
                    <div className='heading-line'>

                    </div>
            </div>
            <div className='part-3-img'>
            <img src={`${host_name}/ceoChair.jpg`} alt="Message From CEO"/>
            {/* <div className="play-icon-part-3">

            <PlayArrowIcon  fontSize='large' />
            </div> */}
            </div>
            </div>
            <div className='part-3'>
            <div className="part-2-heading">
                    <div className='heading-text' style={{textAlign:"center"}}>
                    Your Journey At StartUp Saturday
                    </div>
                    <div className='heading-line'>

                    </div>
            </div>
            </div>
            <div className="part-4">
            <div className="part-4-content">
            <div className='part-4-img'>
                <img src={`${host_name}/startuphome.jpg`} alt=""/>
            </div>
            <div className='part-4-icons' >
                <div>
                        <a rel="noreferrer" href='https://g0mq6dwc1y3.typeform.com/to/QhLha4ci' target="_blank">  
                        <img className="part-4-img-1" src={`${host_name}/registrationForm.png`} alt=""/>
                        </a>
                        Fill the application form
                </div>
                <div>
            <img className="part-4-img-2" src={`${host_name}/homeStartUpIcon.png`} alt=""/>
            Pitch your Startup idea
                </div>
                <div>
            <img className="part-4-img-3" src={`${host_name}/getDealHome.png`} alt=""/>
            Get free mentorship Session
                </div>
            </div>
            </div>
            </div>
            <div className='part-3'>
            <div className="part-2-heading">
                    <div className='heading-text' style={{textAlign:"center"}}>
                    Our Team
                    {/* <div >
                    Committed To Team Excellence
                    </div> */}
                    </div>
                    <div className='heading-line'>
                    </div>
            </div>
            <div className="part-5-img">
                <img src={`${host_name}/piyush.jpg`} alt=""/>
                <img src={`${host_name}/piyush.jpg`} alt=""/>
                <img src={`${host_name}/piyush.jpg`} alt=""/>
            </div>
            </div>
        </div>
    )
}