import React from 'react'
import { Context, ContextItem } from '../Conntext'
import { Avatar } from '../components'
export default function KAvatar(){
  const a = <svg t="1714159130076" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4334" width="200" height="200"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM213.333 832A298.667 298.667 0 0 1 512 533.333a170.667 170.667 0 1 1 170.667-170.666A170.667 170.667 0 0 1 512 533.333 298.667 298.667 0 0 1 810.667 832z" fill="#8A8A8A" p-id="4335"></path></svg>
  return (
    <Context title='Avatar' describe='一些头像样式'>
      <ContextItem title='基本用法'>
        <div className='k-list'>
          <Avatar style={{background:'#eee'}}>{a}</Avatar>
          <Avatar shape='square' style={{background:'#eee'}}>{a}</Avatar>
        </div>
      </ContextItem>
      <ContextItem title='大小用法'>
        <div className='k-list'>
          <Avatar size='large' >{a}</Avatar>
          <Avatar >{a}</Avatar>
          <Avatar size='small'>{a}</Avatar>
        </div>
        </ContextItem>
    </Context>
  )
}