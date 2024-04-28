import React from 'react';
import './Tooltip.scss'


export default function Tooltip({children,effect='dark',place='bottom',content='',...props}) {
  return(
     <div className={`k-tooltip `}>
       {children}
       <div className={`k-tooltip-s ${place} ${effect}`} style={{'--k-tooltip': effect == 'dark'?'#000':'#eee'}} >
       <span>{content}</span><div></div>
       </div>
     </div>
  )
}