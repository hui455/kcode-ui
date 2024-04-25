import React from 'react';
import './Button.scss';
import '../Type.css'
export default function KButton({ style,children,plain,type = 'default',disabled,size = 'default',onClick=()=>{},circle,round, ...props }) {
  let kbutton = ''
  const kadd = (a)=>{kbutton = kbutton + ' ' + a;}
  if(type === 'default')kadd(type)
  if(circle)kadd('circle');
  if(round)kadd('round');
  if(plain)kadd('plain')
  if(disabled){
    kadd('disabled')
    onClick = ()=>{};
  };
  kadd('button-'+size);
  return (
    <button className={'button ' + kbutton } style={{...style,'--button-l':`var(--el-color-${type}-light-9`,'--button-d':`var(--el-color-${type})`}} onClick={onClick} {...props} >
      {children}
    </button>
  );
}