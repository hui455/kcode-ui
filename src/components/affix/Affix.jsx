import React,{useRef,useEffect} from 'react';

export default function Affix(props) {
  const affix = useRef(null);
  useEffect(()=>{
    if(target){
        affix.current.style.position = "relative";
    }
  },[])
  const { children,target, offset=0, } = props;
  return (
    <div ref={affix} style={{ position: 'sticky',top:offset,zIndex:900 }}>
      {children}
    </div>
  );
}