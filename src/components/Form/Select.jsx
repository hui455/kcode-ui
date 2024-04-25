import React ,{useState,useRef}from "react";
import './Autocomplete.scss'


export default  function Select({option,value=1,disabled,onChange=()=>{},...props}){
  const [icon,setIcon] = useState(true)
  option = [{value:'选项1',disabled:true},{value:'选项2'}]
  const kselect = useRef(null)
  const kinput = useRef(null)
  const handleChange = ()=>{
    setIcon(!icon)
    if(!icon)kselect.current.style.display = 'none'
  else kselect.current.style.display = 'block';
  }
  return (
    <div className={`k-autocomplete-b ${disabled?'disabled':''}`} >
         <input ref={kinput} className="k-autocomplete k-select" readOnly  value={value == -1 ? '':option[value].value} onClick={handleChange}   onBlur={()=>{
        kselect.current.style.display = 'none';
      setIcon(true)
    }} {...props} />
        <svg onMouseDown={(e)=>{e.preventDefault();kinput.current.focus();handleChange()}} style={{transform: icon?'rotate(0deg)':'rotate(180deg)'}} t="1713959348297" className="k-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3720" width="200" height="200"><path d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" fill="#60626670" p-id="3721"></path></svg>
        <div ref={kselect} className='k-autocomplete-select'>
        <div className='k-autocomplete-arrow'></div>
         {option.map((item,index)=>{
          return <div className={`k-autocomplete-item ${item.disabled ? 'disabled':''}`} style={value == index ? {color:'#409fff'}:{}} key={index} onMouseDown={(e)=>{
              e.preventDefault()
             if(!item.disabled){ onChange(index,item)
              kselect.current.style.display = 'none';
              setIcon(true)
            }}}
            >{item.value}</div>
        })}
    </div>
    </div>
  )
}