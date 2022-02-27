import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../CSS/footer.css"
import { host_name } from './Keys';
export default function Footer() {
  return (
    <div className='footer-body'>
        <div className='contact-body'>
         
            <img className='footer-lens-logo' src={`${host_name}/lenskartlogo.png`} alt="LensKart Logo" />
            
            <div className='footer-address-text'>
                <span className='main-address-text'>
                    address 
                </span>
                <span className='main-address'>
                12/3MathuraRoad,NH2,Sector uisipsum27D,Faridabads
                </span>  
            </div>
            <div className='footer-address-text'>
                <span className='main-address-text'>
                    email id
                </span>
                <span className='main-address'>
                xyz@lenskart.in
                </span>  
            </div>
            <div className='footer-address-text'>
                <span className='main-address-text'>
                    call use
                </span>
                <span className='main-address'>
                +91-1234567890
                </span>  
            </div>
        </div>
        <div className='social-media-icon'>
            <FacebookIcon style={{color:"white"}}/>
            <TwitterIcon style={{color:"white"}}/>
            <LinkedInIcon style={{color:"white"}}/>
            <InstagramIcon style={{color:"white"}}/>
        </div>
    </div>
  );
}
