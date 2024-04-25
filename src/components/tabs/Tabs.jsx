import React,{useState} from "react";
import './Tabs.scss'
import '../Type.css'

export default function Tabs({items,color='#409fff',...props}){
   const [index,setIndex] = useState(0)
    items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
      disabled: 'true'
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  return(
    <div className="k-tabs">
     <div className="k-tabs-items">
      {items.map((item,i)=> <div className={`k-tabs-item ${item.disabled && 'disabled'}`} style={index === i ?{color:color,borderBottom:`2px solid ${color}`}:{'--tabs-text':color}} key={item.key} onClick={()=>{
          if(!item.disabled) setIndex(i)
        }}>
        <span>{item.label}</span></div>)}
     </div>
     <div className="k-tabs-content">
      {items[index].children}
     </div>
    </div>
  )
}