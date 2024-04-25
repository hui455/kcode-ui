import './Collapse.scss'
import '../Type.css'
import React, { useState } from 'react'

export default function KCollapse({ children,option = [],accordion, ...props }) {
  const icon1 =  <svg t="1713500267692" className="k-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3388" width="16" height="16"><path d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" fill="#cdcdcd" p-id="3389"></path></svg>
  const icon2 =  <svg t="1713500420403" className="k-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3778" width="16" height="16"><path d="M320 885.333333c-8.533333 0-17.066667-4.266667-23.466667-10.666666-12.8-12.8-10.666667-34.133333 2.133334-44.8L654.933333 512 298.666667 194.133333c-12.8-10.666667-14.933333-32-2.133334-44.8 10.666667-12.8 32-14.933333 44.8-2.133333l384 341.333333c6.4 6.4 10.666667 14.933333 10.666667 23.466667 0 8.533333-4.266667 17.066667-10.666667 23.466667l-384 341.333333c-6.4 6.4-12.8 8.533333-21.333333 8.533333z" fill="#cdcdcd" p-id="3779"></path></svg>
  const [expand,setexpand] = useState(new Array(option.length).fill(false))
  const changeexpand = (index)=>{
    let newexpand = [...expand]
    if(accordion){
      newexpand = new Array(option.length).fill(false)
    }
    newexpand[index] = !expand[index]
    setexpand(newexpand)
  }
  return (
    <div  className='k-collapses'>
    {
      option.map((item,index)=>{
        return(
          <div className='k-collapse' key={item.key || index}>
          <button onClick={()=>{
            changeexpand(index)
          }}>{item.title || 'Title'} {expand[index] ? icon1 : icon2} </button>
          <div className={`k-collapse-content ${!expand[index] && 'is-active'}`}>{item.content}</div>
        </div>
        )
      })
    }
    <div className='k-collapse'>
      <button>content {icon1} </button>
    </div>
    </div>
  )
}
