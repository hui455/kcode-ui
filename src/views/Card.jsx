import React from 'react'
import { Context, ContextItem } from '../Conntext'
import { Card } from '../components'
export default function KCard(){
  const a = [1,2,3,4]
  return (
    <Context title='Card' describe='基础卡片样式'>
      <ContextItem title='基础卡片'>
         <Card title='Card name' footer='Footer content' style={{maxWidth:'300px'}}>
            {
               a.map((item,index)=>{
                  return <div key={index}>List item {item}</div>
               })
            }
         </Card>
      </ContextItem>
      <ContextItem title='简单卡片'>
      <Card style={{maxWidth:'300px'}}>
            {
               a.map((item,index)=>{
                  return <div key={index}>List item {item}</div>
               })
            }
         </Card>
      </ContextItem>
      <ContextItem title='带阴影组件'>
      <Card shadow='always' style={{maxWidth:'300px'}}>
            always
         </Card>
         <Card shadow='hover' style={{maxWidth:'300px',marginTop:'20px'}}>
             hover
         </Card>
         <Card shadow='never' style={{maxWidth:'300px',marginTop:'20px'}}>
             never
         </Card>
         
      </ContextItem>
    </Context>
  )
}