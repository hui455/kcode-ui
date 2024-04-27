import React from 'react';
import '../App.css'
import { Link } from '../components'
import { Context, ContextItem } from '../Conntext';

export  default function KLink(){

  return (
     <Context title='Link' describe='一些普通的链接'>
       <ContextItem title='基本用法' describe='最基本的用法'>
         <div className='k-list'>
           <Link>default</Link>
           <Link href='#' type='primary'>primary</Link>
           <Link type='success'>success</Link>
           <Link type='warning'>warning</Link>
           <Link type='danger'>danger</Link>
           <Link type='info'>info</Link>

         </div> 
       </ContextItem>
       <ContextItem title='禁用状态' describe='链接不可用'>
         <div className='k-list'>
           <Link disabled>default</Link>
           <Link type='primary' disabled>primary</Link>
           <Link type='success' disabled>success</Link>
           <Link type='warning' disabled>warning</Link>
           <Link type='danger' disabled>danger</Link>
          <Link type='info' disabled>info</Link>
          </div>
          </ContextItem>
          <ContextItem title='下划线'>
            <div className='k-list'>
              <Link type='primary' underline>primary</Link>
            </div>
          </ContextItem>
     </Context>
  )
}