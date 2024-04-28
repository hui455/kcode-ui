import React from 'react'
import { Button,Affix } from '../components'
import { Context,ContextItem } from '../Conntext'

export default function KAffix(){

  return (
    <Context title='Affix' describe='一些头像样式'>
       <ContextItem style={{height:'100vh'}} title='基础用法'>
         <Affix offsetTop={100}><Button>Offset top 100px</Button></Affix>
       </ContextItem>
    </Context>
  )
}