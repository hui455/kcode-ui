import React,{useRef,useEffect} from "react";
import './Progress.scss'

export default function Kprogress({precentage = 50,width= 400,size = 6,status = 'primary',type = 'line',format,...props}){
  useEffect(()=>{
    if(type !== 'line'){
       progress.current.style.setProperty('--progress-color',props.color || `var(--color-${status})`)
       progress.current.style.setProperty('--progress',type == 'circle'? precentage+'%': Math.floor(precentage/100*280)+'deg')
    }
  },[])
  const progress = useRef(null)
  if(precentage < 0 || precentage > 100) return console.log('precentage must be between 0 and 100');
  let height = size + 'px'
  if(type !== 'line') height = width + 'px'
  if(!format) format = (p) => (`${p}%`)
  const label = <span style={{color:'#606266',fontSize:type == 'line'?'14px':'18px'}}>{format(precentage)}</span>
 const style = {
    line:{
      height: '100%',
      width: `${precentage}%`,
      backgroundColor: props.color || `var(--color-${status})`
    },
    circle:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      height: '90%',
      backgroundColor:'#fff',
      borderRadius: '50%',
    },
    dashboard:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      height: '90%',
      backgroundColor:'#fff',
      borderRadius: '50%',
    }
  }

  return(
   <div className="k-progress" {...props}>
     <div ref={progress} className={`k-progress-${type}`} style={{width:width + 'px',height,borderRadius: height}}>
      <div style={style[type]}>{type !== 'line' && label}</div>
    </div>
    {type == 'line' && label}
   </div>
  )
}