import React from 'react'
import { Autocomplete } from '../components'
import { Context, ContextItem } from '../Conntext'

export default function kAutocomplete(){

  return (
    <Context title='Autocomplete' describe='Autocomplete 组件提供输入建议。'>
       <ContextItem title='基本用法' describe='fisrtClick 为boolean值 反应第一次点击时是否触发'>
         <div className='k-list'>
            <Autocomplete placeholder='请输入'></Autocomplete>
            <Autocomplete placeholder='请输入' fisrtClick={false}></Autocomplete>
         </div>
       </ContextItem>
       <ContextItem title='自定义建议' describe='自定义建议'>
         <div className='k-list'>
            <Autocomplete placeholder='请输入' option={[
              {label:'选项1'}, {label:'选项2'},{label:'选项3'},{label:'选项4'},
          ]}></Autocomplete>
          <Autocomplete placeholder='请输入' option={[
              {label:<><div>选项1</div><div>描述</div></>},
          ]}></Autocomplete>
         </div>
       </ContextItem>
    </Context>
  )
}