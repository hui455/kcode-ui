import e from "cors";
import React,{useRef,useState} from "react";
import './Slider.scss'


export default function Slider({defalutvalue = 20,onLook =()=>{},...props}){
  const [a,setA] = useState(defalutvalue)
  const tag = useRef(null)
  const slider = useRef(null)
  const ceshi = useRef(null)
const valueChange = (e)=>{
  const value = e.target.value
  setA(value)
  slider.current.style.setProperty('--value',value)
  onLook(value)
}
const tagLeave = (e)=>{
  console.log(e.offsetX)
  tag.current.style.display = 'none'
}
const tagMove = (e)=>{
   const a = e.nativeEvent.offsetX
   const b = ceshi.current.offsetLeft
 if(a -b < 25 & a -b > -5) tag.current.style.display = 'block'
 
}


 
  return (
    <div ref={slider} style={{'--value':a,width:'600px'}} className="k-slider-box" {...props}>
    <input  onInput={valueChange} onMouseMove={tagMove} value={a} onMouseLeave={tagLeave}  className="k-slider" type="range" min="0" max="100"  id="slider" />
    <div ref={tag} className="k-slider-s"><span>{a}</span><div></div></div>
    <div ref={ceshi}className="k-slider-c"></div>
    </div>
  )
}