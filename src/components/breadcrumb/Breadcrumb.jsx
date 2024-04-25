import React from "react";
import './Breadcrumb.scss'

export default function Breadcrumb({items,separator= '/',...props}) {
    items=[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]
  return(
    <ol className="k-breadcrumb" {...props}>
         {items.map((item,index)=>{
        return(
         <React.Fragment key={index}>
          <li  >
            <span>{item.title}</span>
          </li>
          {index!==items.length-1&& <li><span>{item.separator || separator}</span></li>}
          </React.Fragment>
        )
      })}
    </ol>
  )
}