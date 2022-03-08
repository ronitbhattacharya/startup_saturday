import React from 'react'
import "../CSS/home.css"
import Header from "./Header"
import Footer from "./Footer"
import OurStory from "./OurStory"
import { testimonials } from './testimonials'
import { host_name } from './Keys'
export default function Home() {
  return (
    <>
    <Header/>
    <MainComponent/>
    <Footer/>
    </>
  )
}


function MainComponent(){
    const ourTeam=[{name:"Rima Kapoor",img:`${host_name}/RimaKapoor.jpg`,role:"HRBP"},{name:"Nitin Gupta",img:`${host_name}/NitinGupta.jpg`,role:"Developer"},{name:"Ronit Bhattacharya",img:`${host_name}/RonitBhattacharya.jpg`,role:"Project Manager"}]
    const ourTestimonial=Object.values(testimonials)
    
    return(
    <>

        <div className='main-home-body'> 
            <div className='home-part-1-img'>
                <img src={`${host_name}/discussion.jpg`} alt=""/>
            </div>
            <div className='home-part-2-content'>
                <div className='home-content'>

                <div className='home-h1'>
                bring your startUp idea to life with lensKart's
                </div>
                <div className='home-h2'>
                StartUp Saturdays
                </div>
                <div className='home-h3'>
                If you're a budding entrepreneur or simply someone with an entrepreneurial bone in your body, you've arrived at the right place.
            <br/>
            Register your interest for Startup Saturdays by clicking the Registration Form and answering a few questions. We''ll invite the most promising ones for a free-wheeling 30-minute chat with one of the Lenskart Founders, where you can ask them anything and everything you'd like to know about building and scaling a startup from scratch. If all goes well you might get a chance for your idea to be funded and incubated by the Founders.
                </div>
            <div className='home-part-3-btn'>
            <a rel="noreferrer" href='https://g0mq6dwc1y3.typeform.com/to/QhLha4ci' target="_blank">
                    <button>Apply Now</button>
                </a>
            </div>
                </div>
            </div>
            <div className='home-part-4-heading'>
                <div className='home-h4'>
                Meet the Co-Founders
                </div>
                <div className='border-line'>

                </div>
            </div>
            <div className='home-part-5-content'>
                    <div className='ceo-content'>
                        <div className='ceo-img'>
                            <img src={`${host_name}/piyush.jpg`} alt="Piyush Bansal" />
                        </div>
                        <div className='ceo-about'>
                        To build futuristic firms , it's important to not get swayed by market or investor benchmarks but set one's own.
                        </div>
                        <div className='designation-ceo'>
                        Peyush Bansal
                        <br/>
                        Co-Founder,CEO&CPO
                        </div>
                    </div>
                    <div className='ceo-content'>
                    <div className='ceo-img'>
                    <img src={`${host_name}/amit.jpg`} alt="Amit" />
                        </div>
                        <div className='ceo-about'>
                        To build futuristic firms , it's important to not get swayed by market or investor benchmarks but set one's own.
                        </div>
                        <div className='designation-ceo'>
                        Amit Chaudhary
                        <br/>
                        Co-Founder,CEO
                        </div>
                    </div>
            </div>
            <div className='home-part-6-content'>

            <div className='home-part-4-heading' style={{marginTop:"8vw"}}>
                <div className='home-h4' style={{color:"white"}}>
                Message from Co-Founder
                </div>
                <div className='border-line' style={{backgroundColor:"white"}}>

                </div>
            </div>
                <div className='ceo-video'>
                    <img src={`${host_name}/ceoChair.jpg`} alt="Message From CEO"/>
                </div>
            <div className='home-part-4-heading'>
                <div className='home-h4' style={{color:"white"}}>
                How does it works
                </div>
                <div className='border-line' style={{backgroundColor:"white"}}>

                </div>
                <div className='home-h6'>
                        <div className='home-box'>
                            <div className='box-img'>
                            <a rel="noreferrer" href='https://g0mq6dwc1y3.typeform.com/to/QhLha4ci' target="_blank">  
                                <img src={`${host_name}/registrationForm.png`} alt=""/>
                                </a>
                            </div>
                            <div>
                            Fill the application form
                            </div>
                        </div>
                        <div className='home-box'>
                        <div className='box-img'>
                        <img src={`${host_name}/homeStartUpIcon.png`} alt=""/>
                            </div>
                            <div>
                            Pitch your Startup idea
                            </div>
                        </div>
                        <div className='home-box'>
                        <div className='box-img'>
                        <img src={`${host_name}/getDealHome.png`} alt=""/>
                            </div>
                            <div>
                            Get free mentorship Session
                            </div>
                        </div>
                </div>
            </div>

            </div>
            
        </div>
    <OurStory ourList={ourTestimonial} heading={"Our Story"}/>       
    <OurStory ourList={ourTeam} heading={"Our Team"}/>       
    </>

    )

}