import React,{useRef} from "react";
import './Dialog.scss'
import Button from "../button/Button";

const a = (is)=>{
  if(is){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
}

export default function Dialog({isshow,title ='Tip',cancelText='取消',okText='确认',children,onOk=()=>{},onCancel=()=>{},closed=()=>{},...props}) {
  a(isshow)
  return(
    <>
    {isshow &&<div className="k-dialog-background">
          <div className="k-dialog">
               <div className="k-dialog-t">{title}</div>
               <div className="k-dialog-c">{children}</div>
               <div className="k-dialog-b">
              <Button onClick={() => {onCancel()}}>{cancelText}</Button> <Button onClick={()=>{onOk()}} type="primary">{okText}</Button>
               </div>
               <div className='k-dialog-x' onClick={() => {closed()}}><svg t="1713800829163" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5466" width="16" height="16"><path d="M 909.812 962.028 c -13.094 0 -26.188 -4.996 -36.179 -14.987 L 73.958 147.368 c -19.98 -19.98 -19.98 -52.378 0 -72.359 c 19.983 -19.98 52.38 -19.98 72.36 0 L 945.99 874.683 c 19.981 19.981 19.981 52.378 0 72.36 c -9.99 9.99 -23.084 14.985 -36.179 14.985 Z" fill="#94989c" p-id="5467"></path><path d="M 110.138 962.028 c -13.094 0 -26.188 -4.996 -36.179 -14.987 c -19.98 -19.98 -19.98 -52.378 0 -72.359 L 873.632 75.01 c 19.982 -19.98 52.377 -19.98 72.36 0 c 19.98 19.981 19.98 52.378 0 72.36 L 146.316 947.041 c -9.99 9.99 -23.084 14.986 -36.179 14.986 Z" fill="#94989c" p-id="5468"></path></svg></div>
           </div>
    </div>}
    </>
  )
}


export function Drawer({isshow,spare='left',title='Tips',children,closed=()=>{},...props}){
  const drawer = useRef(null)
  const style={
    left:{
      marginLeft:'0',
      height:'100%',
      width:'33%',
      animation:'drawer-left 0.5s ease',
    }
  }
  a(isshow)
  return( <>
      {isshow &&<div className='k-dialog-background 'onClick={()=>{  
           closed()
      }}>
         <div ref={drawer} className="k-drawer" onClick={(e)=>{
           e.stopPropagation()
         }} style={style[spare]}>
         <div className="k-dialog-t" >{title}</div>
               <div className="k-dialog-c">{children}</div>
            <div className='k-dialog-x' onClick={() => {closed()}}><svg t="1713800829163" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5466" width="16" height="16"><path d="M 909.812 962.028 c -13.094 0 -26.188 -4.996 -36.179 -14.987 L 73.958 147.368 c -19.98 -19.98 -19.98 -52.378 0 -72.359 c 19.983 -19.98 52.38 -19.98 72.36 0 L 945.99 874.683 c 19.981 19.981 19.981 52.378 0 72.36 c -9.99 9.99 -23.084 14.985 -36.179 14.985 Z" fill="#94989c" p-id="5467"></path><path d="M 110.138 962.028 c -13.094 0 -26.188 -4.996 -36.179 -14.987 c -19.98 -19.98 -19.98 -52.378 0 -72.359 L 873.632 75.01 c 19.982 -19.98 52.377 -19.98 72.36 0 c 19.98 19.981 19.98 52.378 0 72.36 L 146.316 947.041 c -9.99 9.99 -23.084 14.986 -36.179 14.986 Z" fill="#94989c" p-id="5468"></path></svg></div>
         </div>
      </div>  
      }
  </>)

}