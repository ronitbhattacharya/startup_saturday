import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { host_name } from './Keys';
import {useHistory} from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import "../CSS/header.css"
export default function Header() {
  const history=useHistory()
  const actionbtn={"Home":{link:"/",icon:<></>},"About Us":{link:"/aboutus",icon:<></>},"LenStart":{link:"/lenstart",icon:<></>},"Testimonials":{link:"/testimonial",icon:<></>},"Contact Us":{link:"/contactus",icon:<></>}}
  const [getDrawer,setDrawer]=useState(false)
  const toogleDrawer=(status)=>{
      setDrawer(status)
  }
  
  const list = () => (
    <div onClick={()=>toogleDrawer(false)} onKeyDown={()=>toogleDrawer(false)} style={{backgroundColor:"rgb(26, 26, 71)",height:"100%",color:"white"}}>
      <div className='header-icon-drawer'>
            <img src={`${host_name}/lenskartlogo.png`} alt="LensKart Logo" />
        </div>
      <List>
        {Object.keys(actionbtn).map((text, index) => (
          <>
          <ListItem button key={text} onClick={()=>{history.replace({pathname:`${host_name}${actionbtn[text]["link"]}`})}}>
            <ListItemIcon>
              {actionbtn[text]["icon"]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div className='header-body'>
        <div className='header-icon'>
            <img src={`${host_name}/lenskartlogo.png`} alt="LensKart Logo" />
        </div>
        
        <div className='action-tabs'>

            <div onClick={()=>{history.replace({pathname:`${host_name}/`})}} >Home</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/aboutus`})}} >about us</div>
            {/* <div onClick={()=>{history.replace({pathname:`${host_name}/programs`})}} >programs</div> */}
            <div onClick={()=>{history.replace({pathname:`${host_name}/lenstart`})}} >lenstart</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/testimonial`})}} >testimonials</div>
            <div onClick={()=>{history.replace({pathname:`${host_name}/contactus`})}} >contact us</div>
            {/* <div onClick={()=>{history.replace({pathname:`${host_name}/careers`})}} >careers</div> */}
            {/* <div><SearchIcon/></div> */}
        </div>
        
        <div className="menu-icon">
            <MenuIcon fontSize='large' onClick={()=>toogleDrawer(true)}/>
        </div>
        <Drawer
          
            anchor="left"
            open={getDrawer}
            onClose={()=>toogleDrawer(false)}
          >
            
            
            {list()}
          </Drawer>
    </div>
  )
}
