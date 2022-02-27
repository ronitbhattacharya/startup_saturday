import React,{useState} from 'react'
import { TextField } from '@mui/material'
import Footer from "./Footer"
import Header from "./Header"
import "../CSS/contactus.css"
import { useHistory } from 'react-router-dom'
import { host_name } from './Keys'
export default function ContactUs() {
  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  )
}

function MainContent(){
      const history=useHistory()
      const [getName,setName]=useState("")
      const [getMobile,setMobile]=useState("")
      const [getEmail,setEmail]=useState("")
      const [getMessage,setMessage]=useState("")
      const [getStatus,setStatus]=useState({status:false,msg:""})

      function handleClickSend(e){
          if(getName==="" || getMobile==="" || getEmail==="" || getMessage===""){
            setStatus({status:true,msg:"Required"})
          }
          else if(! getEmail.endsWith("@gmail.com")){
            setStatus({status:true,msg:"Email Id InValid it must contain @gmail.com"})
          }
          else{
            alert("Complait Send")
            history.replace({pathname:`${host_name}/`})
          } 
        }
          return(
            <div className='contactus-main-body'>
                <div className='contactus-part-1'>
                    <div className='contact-content'>
                        <div className='contact-heading'>
                          Contact us
                        <div className='contact-content-part-1'>
                        Want to know more ? Get in touch we us
                        </div>
                        </div>
                        <div className='contact-content-part-2'>
                        Find the below form to send me a message and we will
                        get back to you as soon as possible.
                        </div>
                    </div>
                    <div className='contact-img'>
                        <img src={`${host_name}/contactus.jpg`} alt=""/>
                    </div>
                </div>
                <div className='contactus-part-2'>
                    <div>
                      <TextField fullWidth label="Name" type={"text"} variant="standard" onChange={(e)=>{setName(e.currentTarget.value)}} error={getName==="" && getStatus.status} helperText={getStatus.status && getName===""?getStatus.msg:""}  />
                    </div>
                    <div>
                      <TextField fullWidth label="Email Address" type={"email"} variant="standard" onChange={(e)=>{setEmail(e.currentTarget.value)}} error={getEmail==="" && getStatus.status} helperText={getStatus.status && getEmail===""?getStatus.msg:""}  />
                    </div>
                    <div>
                      <TextField fullWidth label="Contact Number" type={"tel"} variant="standard" onChange={(e)=>{setMobile(e.currentTarget.value)}} error={getMobile==="" && getStatus.status} helperText={getStatus.status && getMobile===""?getStatus.msg:""}  />
                    </div>
                    <div>
                      <TextField fullWidth multiline rows={3} label="Message" type={"text"} variant="standard" onChange={(e)=>{setMessage(e.currentTarget.value)}} error={getMessage==="" && getStatus.status} helperText={getStatus.status && getMessage===""?getStatus.msg:""}  />
                    </div>
                    <div className='contact-btn'>
                          <button onClick={handleClickSend}>Send</button>
                    </div>
                </div>
            </div>
          )      
      }
