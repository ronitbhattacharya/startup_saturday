import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { host_name } from './Keys';
import {useHistory} from "react-router-dom"
import "../CSS/header.css"
export default function Header() {
  const history=useHistory()
  return (
    <div className='header-body'>
        <div className='header-icon'>
            <img src={`${host_name}/lenskartlogo.png`} alt="LensKart Logo" />
        </div>
        <div className='action-tabs'>

            <div onClick={()=>{history.replace({pathname:`${host_name}/`})}} >Home</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/aboutus`})}} >about us</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/programs`})}} >programs</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/lenstart`})}} >lenstart</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/testimonial`})}} >testimonials</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/contactus`})}} >contact us</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/careers`})}} >careers</div>
            {/* <div><SearchIcon/></div> */}
        </div>
    </div>
  )
}
