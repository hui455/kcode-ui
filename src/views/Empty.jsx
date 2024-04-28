import React from 'react'
import { Button, Empty } from '../components'
import { Context, ContextItem } from '../Conntext'

const code ={
  one: `
import { Empty } from 'kcode-ui'

  const App = ()=>{
    return(
      <Empty />
    )
  }
  export default App;
  `,
  two: `
  import { Empty } from 'kcode-ui'

    const App = ()=>{
      return(
        <Empty size='400' />
      )
    }
  `
}

export default function KEmpty(){
  return (
    <Context title='Empty' describe=''>
      <ContextItem title='默认' code={code.one} >
        <div className='k-list' style={{justifyContent:'center'}}>
          <Empty />
        </div>
      </ContextItem>
      <ContextItem title='大小' describe='通size属性设置' code={code.two} >
      <div className='k-list' style={{justifyContent:'center'}}>
          <Empty size='400' />
        </div>
      </ContextItem>
      <ContextItem title='底部自定义'  >
      <div className='k-list' style={{justifyContent:'center'}}>
          <Empty><Button style={{marginTop:'10px'}}>自定义</Button></Empty>
        </div>
      </ContextItem>
    </Context>
  )
}