import React from 'react'
import { Tabs } from '../components'
import { ContextItem,Context } from '../Conntext'

export default function KTabs(){

  return (
    <Context title='Tabs' describe='用于标记和选择。'>
      <ContextItem title='基本用法' describe='由type属性来选择样式'>
        <div className='k-list'>
          <Tabs></Tabs>
        </div>
      </ContextItem>
    </Context>
  )
}