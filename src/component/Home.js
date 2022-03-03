import React from 'react';
import Footer from "./Footer"
import Header from "./Header"
import "../CSS/home.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useHistory } from 'react-router-dom';
import { host_name } from './Keys';
export default function Home() {
  return (
      <>
        <Header/>
        <MainContent/>
        <Footer/>
      </>
  );
}


function MainContent(){
    const history=useHistory();
    return(
        <div className='main-home-content'>
            <div className='part-1'>
                <div className='part-1-content'>
                    <div className='part-1-text-1'>Opportunities is waiting for you</div>
                    <div className='part-1-text-2'>StartUp Saturday</div>
                    <div className='part-1-text-3'>It empowering employees for enterpenuers.It is a one stop
                platform to get budding enterpeneurs togather to one
                platform.We believe that enterpeneurship is away creating
                value with new products,new ways of running businesses.A
                comapany is looking to build on something that already exists
                tends to favor incremental over disruptive innovations-if you
                already have a product and you want to take advantage of
                that product then you are at the right place because you will
                get a chance to finded,incubated by our founders Peyush and
                Amit.</div>
                <div className='part-1-btn'>
                    <button onClick={()=>{history.push(`${host_name}/registrationform`)}}>Registration Form</button>
                </div>
                </div>
                <div className='part-1-img'>
                        <img src={`${host_name}/discussion.jpg`} alt="" />
                </div>
            </div>
                <div className="part-2-heading">
                    <div className='heading-text'>
                        Co-Founder's
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
                    <div> Co-Founder,CEO&CPO</div>
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
                    <div> Co-Founder,CEO&CPO</div>
                    </div>
                    <div className='ceo-1-img'>
                    <img src={`${host_name}/amit.jpg`} alt="Amit" />
                    </div>
                </div>
            </div>
            <div className='part-3'>
            <div className="part-2-heading">
                    <div className='heading-text' style={{textAlign:"center"}}>
                        Message From CEO
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
                    <img onClick={()=>{history.push(`${host_name}/registrationform`)}} className="part-4-img-1" src={`${host_name}/registrationForm.png`} alt=""/>
                    Lorem ipsum dolor sit amet.
                </div>
                <div>
            <img className="part-4-img-2" src={`${host_name}/homeStartUpIcon.png`} alt=""/>
            Lorem ipsum dolor sit amet.
                </div>
                <div>
            <img className="part-4-img-3" src={`${host_name}/getDealHome.png`} alt=""/>
            Lorem ipsum dolor sit amet.
                </div>
            </div>
            </div>
            </div>
            <div className='part-3'>
            <div className="part-2-heading">
                    <div className='heading-text' style={{textAlign:"center"}}>
                    Our Team
                    <div >
                    Committed To Team Excellence
                    </div>
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