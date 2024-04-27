import React from 'react';
import '../App.css'
import { Button } from '../components'
import { Context,ContextItem } from '../Conntext';
export  default function KButon(){

  return (
     <Context title="Button" describe='一些普通的按钮'>
       <ContextItem title="基础用法" describe='使用type 、plain 、round 、circle 来定义按钮样式'>
         <div className='k-list'>
          <Button>Default</Button> 
          <Button type="primary">Primary</Button> 
          <Button type="success">Success</Button>
          <Button type="info">Info</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          </div>
          <div className='k-list'>
            <Button plain>Default</Button>
            <Button plain type="primary">Primary</Button>
            <Button plain type="success">Success</Button>
            <Button plain type="info">Info</Button>
            <Button plain type="warning">Warning</Button>
            <Button plain type="danger">Danger</Button>
          </div>
          <div className='k-list'>
            <Button round type="primary">Default</Button>
            <Button round type="success">Success</Button>
            <Button round type="info">Info</Button>
            <Button round type="warning">Warning</Button>
            <Button round type="danger">Danger</Button>
          </div>
          <div className='k-list'>
            <Button circle>hh</Button>
          </div>
       </ContextItem>
       <ContextItem title='禁用状态'>
          <div className='k-list'>
            <Button disabled>Default</Button>
            <Button disabled type="primary">Primary</Button>
            <Button disabled type="success">Success</Button>
            <Button disabled type="warning">Warning</Button>
            <Button disabled type="danger">Danger</Button>
            <Button disabled type="info">Info</Button>
          </div>
          <div className='k-list'>
            <Button disabled plain >Default</Button>
            <Button disabled plain type="primary">Primary</Button>
            <Button disabled plain type="success">Success</Button>
            <Button disabled plain type="warning">Warning</Button>
            <Button disabled plain type="danger">Danger</Button>
            <Button disabled plain type="info">Info</Button>

          </div>
       </ContextItem>
       <ContextItem title='大小'>
        <div className='k-list'>
          <Button size='large'>Default</Button>
          <Button size='default'>Default</Button>
          <Button size='small'>Default</Button>
        </div>   
       </ContextItem>
     </Context>
  )
}