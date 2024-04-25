import React,{useState,useEffect,useRef} from 'react';
import './Carousel.scss'

export default function KCarousel({ width ='400px',height='200px',autoplay,dots = true,dotPositon= 'bottom',autoplaySpeed = 3000,children ,...props}){
  useEffect(()=>{
    let interval;
     if(autoplay){
      interval  = setInterval(() => {
        nextSlide();
      }, intervalDuration);
     }
    return () => clearInterval(interval);
  },[])
  const [kindex,setkindex]=useState(0)
  const index = useRef(0)
  const kca = useRef(null)
  if(!children || !children.length) return <div className="k-carousel" style={{width,height}}>{children}</div>
  const intervalDuration = typeof autoplaySpeed === 'number' ? autoplaySpeed : 3000; // 设置轮播间隔时间，单位为毫秒
  const clonechildren = [...children,children[0]]


  // 无缝跳转
  const t = ()=>{
    kca.current.style.transform = ''
    kca.current.style.transition= ''
    index.current =0
  }
  //切换
  const q = ()=>{
    index.current += 1
    kca.current.style.transform = `translateX(-${(index.current) * 100}%)`;
    kca.current.style.transition = 'transform 0.5s ease'

    setkindex(index.current)
  }
  const qClick = (i)=>{
     index.current = i-1
     q()
  }
  const nextSlide = () => {
     if(index.current === clonechildren.length-1){
         t()
         setTimeout(()=>{q()},0)
         }else{
        q()
     }
  };
  return(
<div  className="k-carousel" style={{width,height}} {...props} >
    <div className="k-carousel-content" ref={kca}>
      {clonechildren}
    </div>
  {dots && <ul className='k-carousel-s' style={dotPositon === 'bottom'?{bottom:'0'}:{top:'0'}}>{[...Array(clonechildren.length-1)].map((_,i)=>
  {return <li key={i}><button onClick={()=>qClick(i)} style={i===kindex || kindex -i === children.length?{backgroundColor:'#fff',width:'22px'}:{}}></button></li>})}</ul>}
</div>
  )
}