import React,{ useEffect,useRef} from "react";
import './Tag.scss'
import '../Type.css'

export default function KTag({type = 'primary',color,colorlight,closed,onClose =()=>{console.log('close')} ,effect ='light',size='default',round,children,...props}){
  const tag = useRef(null)
  if(!colorlight) colorlight = color
  useEffect(()=>{
    tag.current.style.setProperty('--tag-color',colorlight || `var(--el-color-${type}-light-9)`)
    tag.current.style.setProperty('--tag-text-color',color || `var(--el-color-${type})`)
  },[])
  return(
    <span ref={tag} className={`k-tag k-tag-${effect} k-tag-${size} ${round?  'round': ''}`}>
      {children}{closed && <div className='k-tag-close' onClick={()=>{tag.current.style.display = 'none';onClose()}}>×</div>}
    </span>
  )
}