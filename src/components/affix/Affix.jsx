import React from 'react';

export default function Affix(props) {
  const { children,target, offset=0, } = props;
  if(target){
    let  parentElement = document.querySelector(target);
  parentElement.style.position = "relative";
  }
  return (
    <div style={{ position: 'sticky',top:offset,zIndex:900 }}>
      {children}
    </div>
  );
}