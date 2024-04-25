import React, { useState, useEffect,useRef } from 'react'
import './Backtop.scss'
export default function Backtop({right=40,bottom=40,height=200,circle=true,...props}) {
  const backtop = useRef(null)
  useEffect(() => {
    if(backtop.current){
      window.addEventListener('scroll', () => {
        if (window.scrollY > height) {
          backtop.current.style.display = 'flex'
        } else {
          backtop.current.style.display = 'none'
        }
      })
    }
  }, [])
  return (
    <div ref={backtop} className={`k-backtop ${circle? 'circle': ''}`} style={{right,bottom}} onClick={() => {
      console.log('hh')
      window.scrollTo({
        top: 0,
      })
    }} >
       {props.children ? props.children : <svg t="1713713783177"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1561" width="20" height="20"><path d="M325.456471 862.280661" fill="#409fff" p-id="1562"></path><path d="M882.057788 862.280661" fill="#409fff" p-id="1563"></path><path d="M236.028491 877.160382" fill="#409fff" p-id="1564"></path><path d="M960.132455 877.160382" fill="#409fff" p-id="1565"></path><path d="M63.683483 788.736998" fill="#409fff" p-id="1566"></path><path d="M958.469023 788.736998" fill="#409fff" p-id="1567"></path><path d="M64.77753 858.792098" fill="#409fff" p-id="1568"></path><path d="M861.417121 738.727375c41.604731 0 65.233383-54.963795 34.928639-85.258218L547.071415 304.191372c-20.029996-20.031716-49.822121-20.031716-69.853837 0L127.955275 653.469157c-31.085714 31.073673-5.136514 85.258218 35.441258 85.258218L861.417121 738.727375 861.417121 738.727375z" fill="#409fff" p-id="1569"></path><path d="M959.523505 858.792098" fill="#409fff" p-id="1570"></path></svg>}
    </div>
  )
}