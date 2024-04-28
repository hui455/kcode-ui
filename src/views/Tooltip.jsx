import React from 'react'
import {Tooltip, Button } from '../components'
import { Context, ContextItem } from '../Conntext'

export default function KTooltip(){

  return (
    <Context title='Tooltip' describe='常用于展示鼠标 hover 时的提示信息。'>
     <ContextItem title='基础用法'>
      <div className='k-list'>
       <Tooltip content='content'><Button>Bottom</Button></Tooltip>
       <Tooltip place='top' content='content'><Button>Top</Button></Tooltip>
       <Tooltip place='left' content='content'><Button>Left</Button></Tooltip>
       <Tooltip place='right' content='content'><Button>Right</Button></Tooltip>
       </div>
     </ContextItem>
     <ContextItem title='主题'>
      <div className='k-list'>
        <Tooltip content='content'><Button>Default</Button></Tooltip>
        <Tooltip content='content' effect='light'><Button>Light</Button></Tooltip>
      </div>
     </ContextItem>
    </Context>
  )
}