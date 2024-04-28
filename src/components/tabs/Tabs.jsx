import React,{useState} from "react";
import './Tabs.scss'
import '../Type.css'

export default function Tabs({items =[],color='#409fff',...props}){
   const [index,setIndex] = useState(0)
  return(
    <div className="k-tabs">
     <div className="k-tabs-items">
      {items.map((item,i)=> <div className={`k-tabs-item ${item.disabled && 'disabled'}`} style={index === i ?{color:color,borderBottom:`2px solid ${color}`}:{'--tabs-text':color}} key={item.key} onClick={()=>{
          if(!item.disabled) setIndex(i)
        }}>
        <span>{item.label}</span></div>)}
     </div>
     <div className="k-tabs-content">
      {items.length !== 0 && items[index].children}
     </div>
    </div>
  )
}