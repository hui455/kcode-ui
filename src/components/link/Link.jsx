import React from 'react';
import './Link.scss';
import '../Type.css'
export default function KLink({ children,type = 'default',underline,disabled,onClick,className,...props}) {
   let klink = 'link-'+ type;
  const kadd = (a)=>{  klink = klink + ' ' + a;}
  if(underline)kadd('underline')
  if(disabled){
    kadd('disabled');
    onClick = (e)=>{e.preventDefault()}
  }
  return (
    <a className={'link ' + klink +' '+ className} onClick={onClick} {...props} >
      {children}
    </a>
  );
}