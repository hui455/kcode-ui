import React from 'react'
import { Button ,Badge} from '../components'
import { Context, ContextItem } from '../Conntext'

export default function KBadge(){

  return (
    <Context title='Badge' describe='按钮和图标上的数字或状态标记。'>
      <ContextItem title='基本用法' describe='value传数据接受string number ,color改变背景颜色'>
      <div className='k-list'>
      <Badge value={12}><Button>comments</Button></Badge>
      <Badge value='24'><Button>String</Button></Badge>
      <Badge value={0} color='skyblue'><Button>zero</Button></Badge>
      </div>
      </ContextItem>
      <ContextItem title='最大值' describe='max值限制显示最大值'>
      <div className='k-list'>
      <Badge value={12} max={9}><Button>comments</Button></Badge>
      <Badge value='24' max={9}><Button>String</Button></Badge>
      <Badge value={0} max={9} color='skyblue'><Button>zero</Button></Badge>
      </div>
      </ContextItem>
      <ContextItem title='小圆点' describe='value 为undefind'>
      <div className='k-list'>
      <Badge><Button>comments</Button></Badge>
      </div>
      </ContextItem>
    </Context>
  )
}