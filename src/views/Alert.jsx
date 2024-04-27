import React from 'react'
import { Context, ContextItem } from '../Conntext'
import { Alert } from '../components'
export default function KAlert(){
  return (
    <Context title='Alert' describe='用于页面中展示重要的提示信息。'>
       <ContextItem title='基本用法' describe='Alert 组件不属于浮层元素，不会自动消失或关闭。Alert 组件提供四种类型，由 type 属性指定，默认值为 info。'>
           <Alert title={'Success alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert type='info' title={'Info alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert type='warning' title={'Warning alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert type='error' title={'Error alert'} style={{maxWidth:'600px'}}></Alert>
       </ContextItem>
       <ContextItem title='主题' describe='Alert提供2种主题 light(默认) dark 通过 effect 属性设置'>
           <Alert effect='dark' title={'Success alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert effect='dark' type='info' title={'Info alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert effect='dark' type='warning' title={'Warning alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert effect='dark' type='error' title={'Error alert'} style={{maxWidth:'600px'}}></Alert>
       </ContextItem>
       <ContextItem title='标签' describe='添加 icon 属性 组件会自动添加标签'>
       <Alert icon title={'Success alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert icon type='info' title={'Info alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert icon type='warning' title={'Warning alert'} style={{maxWidth:'600px',marginBottom:'20px'}}></Alert>
           <Alert icon type='error' title={'Error alert'} style={{maxWidth:'600px'}}></Alert>
       </ContextItem>
    </Context>
  )
}