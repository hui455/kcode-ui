import React from "react";
import "./Scrollbar.scss";

export default function KScrollbar( { children,height = '100%',width = '100%',always, ...props}) {
  let a = 'kscrollbar';
  if(always) a += ' always';

  return (
    <div className={a} style={{height,width}} {...props} >
        {children}     
    </div>
  );
}