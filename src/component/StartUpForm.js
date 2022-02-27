import React from 'react'
import Question from "./Question"
import "../CSS/startUpForm.css"
import { host_name } from './Keys'
export default function StartUpForm() {
  return (
    <div className='main-body'>

        <div className='lens-logo'>
            <img src={`${host_name}/lenskartlogo.png`} alt="LensKart-Logo" className='lens-logo-img' />
        </div>
       <div className='question-portion'>
            <Question/>
       </div>
        </div>
  )
}
