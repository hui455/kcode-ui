import React from 'react'
import { Slider } from '../components'
import { Context, ContextItem } from '../Conntext'

export default function Breadcrumb(){

  return (
    <Context title='Slider' describe='通过拖动滑块在一个固定区间内进行选择'>
       <ContextItem title='基础用法'>
        <Slider></Slider>     
       </ContextItem>
    </Context>
  )
}