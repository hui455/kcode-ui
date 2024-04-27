import React,{useState} from 'react'
import { Watermark,Switch } from '../components'
import { Context,ContextItem } from '../Conntext'

export default function KWatermark(){
  const [isshow,setIsshow]= useState(false)
  return (
    <Context title='Watermark' describe='在页面上添加文本或图片等水印信息'>
       <ContextItem title='基本用法'>
       <Watermark context='Kcode' ></Watermark>
       </ContextItem>
       <ContextItem title='全局水印' describe=' 通过 cross 属性判断是否为全局'>
         <Switch value={isshow} onClick={()=>{
           setIsshow(!isshow)
           console.log(isshow)
         }}>改变水印作用范围</Switch>
         <Watermark content='Kcode' cross={isshow}></Watermark>
       </ContextItem>
       <ContextItem title='自定义样式' describe='通过 width 、height 、font 、rotate 属性自定义样式'>
         <Watermark content='Kcode' ></Watermark>
       </ContextItem>
    </Context>
  )
}