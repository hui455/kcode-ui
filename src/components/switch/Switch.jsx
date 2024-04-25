import React  from "react";
import './Switch.scss'

export default function Switch({value =false,style={},disabled,onClick=()=>{},onColor='#409fff',offColor='#dcdfe6',size='default',...props}){
  const newstyle = {
    ...style,
    backgroundColor:value ? onColor : offColor,
    justifyContent: value ? 'flex-end' : 'flex-start'
  }
  if(disabled){
    newstyle.cursor = 'not-allowed'
    newstyle.opacity = '0.5'
    onClick=()=>{}
  }
  return(
    <div className={`k-switch ${size}`} style={newstyle} onClick={onClick} {...props}>
       <div className={`k-switch-c ${size}`}></div>
    </div>
  )
}