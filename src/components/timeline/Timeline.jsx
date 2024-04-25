import React from 'react';
import './Timeline.scss'

export default function Timeline({items,...props}) {
 
  return(
    <ul className="k-timeline">
       {items.map((item, index) => (
        <li key={index}>
         <div className='k-timeline-l' style={{backgroundColor:item.color}}>{items.icon}</div>
         {index !== items.length-1 && <div className='k-timeline-t'></div>}
         <div className='k-timeline-i' style={item.style}>{item.children}
           {item.time && <div style={{color:'#909399',margin:'8px 0 0',fontSize:'13px'}}>{item.time}</div>}
         </div>
        </li>
      ))}
    </ul>
  )
}