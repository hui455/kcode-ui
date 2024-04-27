import React from 'react'
import { Context,ContextItem } from '../Conntext'
import { Tag } from '../components'
export default function KTag(){

  return (
    <Context title='Tag' describe='用于标记和选择'>
       <ContextItem title='基础用法' describe='由 type 属性来选择 tag 的类型。 也可以通过 color 属性来自定义背景色。'>
         <div className='k-list'>
            <Tag>Tag1</Tag>
            <Tag type='success'>Tag2</Tag>
            <Tag type='info'>Tag3</Tag>
            <Tag type='warning'>Tag4</Tag>
            <Tag type='danger'>Tag5</Tag>
            <Tag color='#fff' colorlight='skyblue'>Tag6</Tag>
         </div>
       </ContextItem>
       <ContextItem title='可移除' describe='通过 closed 属性来控制是否可关闭。'>
         <div className='k-list'>
            <Tag closed>Tag1</Tag>
            <Tag type='success' closed>Tag2</Tag>
            <Tag type='info' closed>Tag3</Tag>
            <Tag type='warning' closed>Tag4</Tag>
            <Tag type='danger' closed>Tag5</Tag>
         </div>
         </ContextItem>    
         <ContextItem title='不同尺寸'>
            <div className='k-list'>
            <Tag size='large'>Large</Tag>
             <Tag size='default'>Default</Tag>
             <Tag size='small'>Small</Tag>
            </div>
         </ContextItem>
         <ContextItem title='主题' describe='通过effect改变主题'>
           <div className='k-list'>
             Dark 
             <Tag effect='dark'>Tag1</Tag>
             <Tag effect='dark' type='success'>Tag2</Tag>
             <Tag effect='dark' type='info'>Tag3</Tag>
             <Tag effect='dark' type='warning'>Tag4</Tag>
             <Tag effect='dark' type='danger'>Tag5</Tag>
           </div>
            <div className='k-list'>
              Light
              <Tag effect='light'>Tag1</Tag>
              <Tag effect='light' type='success'>Tag2</Tag>
              <Tag effect='light' type='info'>Tag3</Tag>
              <Tag effect='light' type='warning'>Tag4</Tag>
              <Tag effect='light' type='danger'>Tag5</Tag>
            </div>
            <div className='k-list'>
              Plain
              <Tag effect='plain'>Tag1</Tag>
              <Tag effect='plain' type='success'>Tag2</Tag>
              <Tag effect='plain' type='info'>Tag3</Tag>
              <Tag effect='plain' type='warning'>Tag4</Tag>
              <Tag effect='plain' type='danger'>Tag5</Tag>
            </div>
         </ContextItem>
         <ContextItem title='可圆形'>
            <Tag round>Tag1</Tag>
         </ContextItem>
        </Context>
  )
}