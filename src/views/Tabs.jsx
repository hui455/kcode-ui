import React from 'react'
import { Tabs } from '../components'
import { ContextItem,Context } from '../Conntext'

export default function KTabs(){

  return (
    <Context title='Tabs' describe='用于标记和选择。'>
      <ContextItem title='基本用法' describe=''>
          <Tabs items={[
            {label: 'User',children:'User'},
            {label: 'Config',children:'Config'},
            {label: 'Role',children:'Role'}
          ]}></Tabs>
      </ContextItem>
    </Context>
  )
}