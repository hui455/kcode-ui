import React from "react";
import './Skeleton.scss'

export default function KSkeleton({row=3,size = '400px',children,circle,animated,...props}){
  if(typeof row !== 'number') row = row *1
  const a = [...new Array(row+1)]
  const style = circle ? {borderRadius:'50%',width:size,height:size} : {width:size}
  return(
     <div className="k-skeleton" style={style} {...props}>
      {children}
      {!children && a.map((_,index)=>{
          if(index !==0) return <div key={index} style={{width:index !== row ?'100%': '66%',marginTop:'16px'}} className={`k-skeleton-item ${animated ? 'animated' : ''}` }></div>
          return  <div key={index} style={{width:'33%'}} className={`k-skeleton-item ${animated ? 'animated' : ''}`}></div>
      })}
     </div>
  )
}