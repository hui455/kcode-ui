import React,{useRef,useEffect} from "react";
import './Table.scss'


export default function Table({data=[],columns=[],height='auto',maxHeight='auto',width,border,stripe,style={},...props}){
  useEffect(()=>{
    const a = table.current.clientHeight
    const b = table.current.scrollHeight
    const c = tr.current.clientHeight
    if(b - a >0){ 
      table.current.lastElementChild.style.height = ((2*a)- b - c) + 'px'
      table.current.lastElementChild.style.bottom = (b-a) + 'px'
    }
   },[])
  const table = useRef(null)
  const tr = useRef(null)
  const MouseDown = (e)=>{
    e.preventDefault()
   document.addEventListener('mouseup',MouseUp)
   document.addEventListener('mousemove',Mousemove)
   table.current.lastElementChild.style.display = 'block'

  }
  const MouseUp = (e)=>{
    document.removeEventListener('mousemove',Mousemove)
    document.removeEventListener('mouseup',MouseUp)
    table.current.lastElementChild.style.display = ''
    console.log('2')
  }
  const Mousemove = (e)=>{
     table.current.scrollTop += e.movementY
  }
  const handleChange = ()=>{
   const distance = table.current.scrollTop
   table.current.lastElementChild.style.transform = `translateY(${2*distance}px)`

  }


  return(
    <div ref={table} onScroll={handleChange}  className="k-table-b" style={{...style,height,maxHeight,width}}>
      <table className={`k-table ${stripe?'stripe':''} ${border?'border':''}`}>
        <tbody>
       <tr ref={tr}>{columns.map((item)=><th key={item.key} style={{width:item.width}}  >{item.title}</th>)}</tr>   
       {
        data.map((item)=> <tr style={{backgroundColor:item.color}} key={item.key}>{columns.map((i)=>{
        if(i.render) return <td key={i.key}>{i.render(item[i.dataIndex])}</td>
        return <td key={i.key}>{item[i.dataIndex]}</td>
        })}</tr>
        )}
        </tbody>
      </table>
      <div className="k-table-scroll" onMouseDown={MouseDown}></div>
    </div>
  )
}


