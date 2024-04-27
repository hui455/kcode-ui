import React from "react";
import "./Scrollbar.scss";

export default function KScrollbar( { children,height = '100%',width = '100%',always, ...props}) {

  return (
    <div className={`kscrollbar ${always ? 'always' : ''}`} style={{height,width}} {...props} >
        {children}     
    </div>
  );
}