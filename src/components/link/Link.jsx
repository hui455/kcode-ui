import React from 'react';
import './Link.scss';
import '../Type.css'
export default function KLink({ children,type = 'default',style,underline,disabled,onClick,...props}) {

  if(disabled){
    onClick = (e)=>{e.preventDefault()}
  }
  return (
    <a className={`k-link ${underline?'underline':''} ${disabled?'disabled':''} ${type === 'default' ? type :''}`} style={{...style,'--k-link': `var(--el-color-${type})`}} onClick={onClick} {...props} >
      {children}
    </a>
  );
}