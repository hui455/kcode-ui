import React from 'react'
import { Collapse } from '../components'
import { Context, ContextItem } from '../Conntext'

export default function KCollapse(){
  const option =[
    {
      key:'1',
      title:'标题1',
      content:<p>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;
      Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</p>
    },
    {
       key:'2',
       title:'标题2',
       content:'内容2'
    },
    {
       key:'3',
       title:'标题3',
       content:'内容3'
    },
    {
       key:'4',
       title:'标题4',
       content:'内容4'
    }
  ]
  const option2 =[{
    key:'1',
    title:<span style={{color:'red'}}><strong>标题1</strong></span>,
    content: <p style={{color:'skyblue'}}><strong>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</strong></p>
  }]
  return (
    <Context title='Collapse' describe='通过折叠面板收纳内容区域'>
      <ContextItem title='基础用法' describe=''>
         <Collapse option={option}></Collapse>
      </ContextItem>
      <ContextItem title='手风琴' describe='通过 accordion 属性来设置是否以手风琴模式显示。'>
          <Collapse option={option} accordion></Collapse>
      </ContextItem>
      <ContextItem title='自定义' describe=''>
        <Collapse option={option2} accordion>
        </Collapse>
      </ContextItem>
    </Context>
  )
}