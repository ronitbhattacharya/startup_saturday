import React,{useState,useRef,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import "../CSS/Question.css"
import {TextField} from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {fetchQuestions } from './questions'
import { host_name } from './Keys';
export default function Question() {
  let questions=fetchQuestions()
  const history=useHistory()
  const [getStatus,setStatus]=useState(false)
  const nextBtnRef=useRef()
  const [getCurrent,setCurrent]=useState(0)
  const [getValue,setValue]=useState("")
  const [getResponses,setResponses]=useState({})

  useEffect(()=>{
    let question_number=Object.keys(questions)
    let obj={}
    for(let i=0;i<question_number.length;i++){
      obj[question_number[i]]=""
    }
    setResponses(obj)
  },[])

  function handlePreviousClick(e){
    nextBtnRef.current.innerText=`Next`
    let obj=getResponses
    obj[getCurrent]=getValue
    setResponses(obj)
    setValue(obj[getCurrent-1]===undefined?"":obj[getCurrent-1])
    setCurrent(getCurrent-1)
    setStatus(false)
  }

  function handleNextClick(e){
    if(getCurrent!==0 && getValue===""){
      setStatus(true)
    }
    else{
      setStatus(false)
    if(getCurrent!==0 && getCurrent+1===Object.keys(questions).length){
      nextBtnRef.current.innerText=`Submit`
    }
    else if(getCurrent!==0){
      nextBtnRef.current.innerText=`Next`
    }
    let obj=getResponses
    if(getCurrent!==0){
      obj[getCurrent]=getValue
      setResponses(obj)
    }
    setValue(obj[getCurrent+1]===undefined?"":obj[getCurrent+1])
    if(getCurrent===Object.keys(questions).length){
      alert("Your Response Submitted")
      history.replace({pathname:`${host_name}/`})
    }
    else{
      setCurrent(getCurrent+1);
    }
  }
  }

  
  function Welcome(){
    return(
      <div className='welcome-body'>
        <div className='welcome-text'>
            <div className='wel-text-1'>
              startup
            </div>
            <div className='wel-text-2'>
                saturday
            </div>
        </div>
        <div className='action-part'>
          <div className='action-text-1'>
          One Platform for budding entrepreneurs all over the country
          </div>
          <div className='action-text-2'>
          A chance to be mentored by Lenskart Founders!!
          </div>
          <div className='action-btn'>
            <button onClick={handleNextClick}>Yes! I'm Interested <ArrowForwardIcon/></button>
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      {
        getCurrent===0? <Welcome/>:
        <div className='question-body'>
          <div className='question-text'>
            <div className='question'>
            <span>{getCurrent}</span>
            <ArrowRightAltIcon/> {questions[String(getCurrent)]["q"]}
            </div>
            <div className='msg'>
            {questions[String(getCurrent)]["m"]}
            </div>
          </div>
          <div className='output'>
          <TextField multiline error={getStatus} helperText={getStatus?"Required":""} rows={Math.min(searchNewLine(getValue),6)} value={getValue} onChange={(e)=>{setValue(e.currentTarget.value)}} fullWidth label="Your Response" variant="standard" />
          </div>
          <div className='mover-btn'>
            <button onClick={handlePreviousClick}><ArrowBackIcon/> Back</button>
            <button onClick={handleNextClick}><span ref={nextBtnRef}>Next</span> <ArrowForwardIcon/></button>
          </div>
      </div>

      }
      </>
  )
}



function searchNewLine(word){
  
  let number = 1;
  let pos = word.indexOf("\n");
  while(pos > -1) {
    word=word.slice(pos+1)
    pos = word.indexOf("\n");
    number++;
  }
  return number;
}