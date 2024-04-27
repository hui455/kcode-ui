import React from "react";
import './App.css'
import { Scrollbar } from "./components";
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
  return(
    <div className='k-context-item' style={{width:'90%',marginBottom:'20px'}}>
      <div className='k-context-item-title'>{props.title}</div>
      <div className='k-context-m'>{props.describe}</div>
       <div className="k-context-i">{props.children}
        <div style={{height:'20px',borderTop:'1px solid #dcdfee',marginTop:'20px'}}></div>
       </div>
    </div>
  )
}