import React from 'react'
import { Context,ContextItem } from '../Conntext'
import { Carousel } from '../components'
export default function KCarousel(){

  return (
    <Context title='Carousel' describe='一些轮播图'>
       <ContextItem title='基础用法'>
        <div className='k-list'>
        <Carousel>
            <div style={{background:'#444666'}}></div>
            <div style={{background:'#44466690'}}></div>
            <div style={{background:'#44466680'}}></div>
         </Carousel>
         <Carousel dots={false}>
            <div style={{background:'#444666'}}></div>
            <div style={{background:'#44466690'}}></div>
            <div style={{background:'#44466680'}}></div>
         </Carousel>
        </div>
       </ContextItem>
       <ContextItem title='循环播放'>
         <div className='k-list'>
         <Carousel autoplay>
            <div style={{background:'#444666'}}></div>
            <div style={{background:'#44466690'}}></div>
            <div style={{background:'#44466680'}}></div>
         </Carousel>
         <Carousel autoplay autoplaySpeed={1000}>
            <div style={{background:'#444666'}}></div>
            <div style={{background:'#44466690'}}></div>
            <div style={{background:'#44466680'}}></div>
         </Carousel>
         </div>
       </ContextItem>
       <ContextItem title='可以放到顶部'>
       <Carousel dotPositon='top'>
            <div style={{background:'#444666'}}></div>
            <div style={{background:'#44466690'}}></div>
            <div style={{background:'#44466680'}}></div>
         </Carousel>
       </ContextItem>
    </Context>
     
  )
}