import React,{useState,useRef} from 'react';
import './Menu.scss'

export default function Menu({onChange = ()=>{},items=[],...props}) {
 
  const [MenuHover,setMenuHover] = useState('');
  const onClick = (item)=>{
    setMenuHover(item.key);
    onChange(item);
  }
  let n = 0;
  return (
    < div className="k-menu" {...props}>
       {renderMenu(items,n,MenuHover,onClick)}
    </div>
  )
}



const renderMenu = (items,n,M,onClick)=>{
  n = n+1;const li = useRef(null);
  const svg = useRef(null);
  const handleChange = ()=>{
    if(li.current.style.display === 'block'){
      li.current.style.display = 'none';
      svg.current.style.transform = 'rotate(0deg) translateY(-50%)';
    }else{
      li.current.style.display = 'block';
      svg.current.style.transform = 'rotate(180deg) translateY(50%)';
    }
  }
  return ( 
    items.map((item,index) =>{
      if(item.type && item.type === 'group' ){
        return (
          <React.Fragment key={index}>
          <div className="k-menu-group"> {item.label} </div>
           {renderMenu(item.children,n-1,M,onClick)}
          </React.Fragment>
        )
      }
      if(item.children){
        return <li key={index}><div onClick={handleChange} className="k-menu-item" style={{padding:`0 32px 0 ${n*24}px`}}>{item.label}
         <svg ref={svg} style={{transform:'rotate(0deg) translateY(-50%)'}} t="1713959348297" className="k-menu-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3720" width="200" height="200"><path d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" fill="#60626670" p-id="3721"></path></svg>
        </div>
             <div ref={li} className='k-menu-children' style={{display:'none'}}>
             {renderMenu(item.children,n,M,onClick)}
             </div>
        </li>
      }
       return <div className="k-menu-item" style={{padding:`0 16px 0 ${n*24}px`,background:M === item.key ?'#79bbff30' :'',color:M === item.key ?'#79bbff' :''}} key={item.key} onClick={()=>onClick(item)} >{item.label}  </div>

    })
  )
}