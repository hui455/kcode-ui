import React from "react";
import { useState } from "react";
import './App.css'
import { Scrollbar,Tooltip } from "./components";
export  function Context({...props})
{
  return(
    <Scrollbar always={true}>
      <div className='k-context'>
         <div className='k-context-title'>{props.title}</div>
         <div className='k-context-m'>{props.describe}</div>
         <div className='k-context-c'>
           {props.children}
         </div>
      </div>
      </Scrollbar>
  )
}


export const ContextItem = ({...props})=>{
   const[isshow,setIsshow]= useState(false)
   const handleChange = ()=>{
     setIsshow(!isshow)
   }
  const svg =<svg onClick={handleChange} t="1714222209524" style={{cursor:'pointer'}}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3489" width="18" height="18"><path d="M300.224 224L32 525.76l268.224 301.76 71.776-63.776-211.552-237.984 211.552-237.984zM711.744 224L640 287.776l211.552 237.984L640 763.744l71.744 63.776 268.256-301.76z" p-id="3490"></path></svg>
  return(
    <div className='k-context-item' style={{width:'90%',marginBottom:'20px'}}>
      <div className='k-context-item-title'>{props.title}</div>
      <div className='k-context-m'>{props.describe}</div>
       <div className="k-context-i">{props.children}
        <div style={{height:'40px',borderTop:'1px solid #dcdfee',borderBottom:'1px solid #dcdfee',
        marginTop:'20px',display:'flex',justifyContent:'end',alignItems:'center'}}><Tooltip content={isshow?'隐藏代码':'显示代码'}>{svg}</Tooltip></div>
         <pre style={{display: isshow?'block':'none'}}>
          <code>
          {props.code}
          </code>
        </pre>
       </div>
       
    </div>
  )
}