import React from "react";
import "./Badge.scss";

export default function Badge({children,value,max,color ='#f56c6c',...props}){
  if(value > max){
    value = max + "+";
  }
  return (
    <div className="k-badge " {...props}>
      {children}
      <div className={`k-badge-${value ? 'value' : 'dot'}`} style={{background:color}}>{value}</div>
    </div>
  );
}