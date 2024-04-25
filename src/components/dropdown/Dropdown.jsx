import React,{useEffect,useRef} from "react";
import "./Dropdown.scss";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    type:'danger',
    label: 'a danger item',
  },
];
export default function Dropdown({children,trigger ='hover',type ='primary',space,...props}){
   if(!space)space = {
     top:'100%',
     left:'0'
   }
  const dropdown = useRef(null)
  useEffect(()=>{
    dropdown.current.style.setProperty('--dropdown-text','#000000e6')
    dropdown.current.style.setProperty('--dropdown-color',`var(--el-color-${type}-light-9)`)
    dropdown.current.style.setProperty('--dropdown-text2',`var(--el-color-${type})`)
  },[])
  return(
    <div  className="k-dropdown" {...props}>
     {children}
     <div ref={dropdown} className={`k-dropdown-items k-${trigger}`} style={space}>
      {items.map((item)=>{
        return <div className={`k-dropdown-item ${item.disabled && 'disabled'}`  }  style={item.type &&{ '--dropdown-text':`var(--el-color-${item.type})`,
        '--dropdown-color':`var(--el-color-${item.type})`,
        '--dropdown-text2':'#fff'}}  key={item.key}>{item.icon}{item.label}</div>
      })}
     </div>
    </div>
  )
}