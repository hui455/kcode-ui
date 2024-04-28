import React,{useState,useRef} from "react";
import './Autocomplete.scss'
export default function Autocomplete({option = [{label:'选项1'},{label:'选项2'}],fisrtClick=true,n=6,onClickSelect = ()=>{},...props}){
  const kselect = useRef(null)
  const kinput = useRef(null)
   const [value,setValue] = useState('')
   const [data,setData] = useState(option)
   const handleChange = (e)=>{
    setValue(e.target.value)
    console.log(option)
    const a = option.filter(item => item && item.label.indexOf(e.target.value) !== -1)
    setData(a)
    if(a.length == 0 )kselect.current.style.display = 'none'
      else kselect.current.style.display = 'block'
   }
   const Addoption = (value)=>{
    setValue(value.label)
    kselect.current.style.display = 'none',
    onClickSelect(value)
  }
  return(
    <div className='k-autocomplete-b'>
    <input ref={kinput} className="k-autocomplete"  value={value} onClick={(e)=>{
      if(e.target.value == '' && !fisrtClick) return
      if(data.length != 0)kselect.current.style.display = 'block'
    }} onChange={handleChange} onBlur={()=>{
      kselect.current.style.display = 'none';
    }} {...props} />
    
    <div ref={kselect} className='k-autocomplete-select'>
       <div className='k-autocomplete-arrow'></div>
         {data.slice(0,n).map((item,index)=>{
          return <div className='k-autocomplete-item'style={typeof item.label =='object' ? {height:'auto'}:{}} key={index} onMouseDown={(e)=>{e.preventDefault();Addoption(item)}}>{item.label}</div>
        })}
    </div>
    </div>
  )
}

export const Input =({disabled,close,onClose,data=[],...props})=>{
  
  const  kinput = useRef(null)
return  <div className={`k-autocomplete-b ${disabled?'disabled':''}`}><input ref={kinput} className={`k-autocomplete ${close ? 'close':''}`}{...props}/>{(close && data.length) ?<div className='k-input-close' onClick={()=>{onClose()}}>×</div> : ''}</div>
}


export const Radio = ({option =[],value,size='default',onChange =()=>{},...props})=>{
  const hangleChange = (e)=>{
    onChange(e.target.value)
  }
  return (
      <div className={`k-radio-group ${size}`}>
      {option.map((item,index)=><div key={index} className={`k-radio ${item.disabled?'disabled':''}`}style={value == item.value ? {color:'#409fff'}:{}}><input type="radio" value={item.value} checked={value == item.value}  onChange={hangleChange} {...props}/>{item.value}</div>)}
      </div>
  )
}
