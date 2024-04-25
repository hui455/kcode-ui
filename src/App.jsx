import  Button  from './components/button/Button'
import KLink from './components/link/Link'
import KScrollbar from './components/scrollbar/Scrollbar'
import KCard from './components/card/Card'
import KBadge from './components/badge/Badge'
import KCarousel from './components/carousel/Carousel'
import KCollapse from './components/collapse/Collapse'
import {Autocomplete,Radio,Input,Message,useMessage,Dialog,Drawer, Empty,Progress,Result,Skeleton,Tag,Watermark,Timeline,Affix,Backtop,Breadcrumb,Dropdown,Tabs,Alert, Select, Slider} from './components'
import React,{useEffect,useRef,useState} from 'react'
import './App.css'
import Switch from './components/switch/Switch'
function App() {
  const {KMessage}=useMessage()
  const link1 = useRef(null)
  const link2 = useRef(null)
  const [value,setValue] = useState(true)
  const [isshow,setIsshow]= useState(false)
  function open(){
    setIsshow(true)
  }
  function close(){
    setIsshow(false)
  }



  const [link,setlink] = useState([...Array(9)])
  const add = ()=>{
    setlink([...link,1])
  }
  const del = ()=>{
    setlink(link.slice(0,link.length-1))
  }
  const hh = link.map((_,index)=>{
  return  <div key={index} style={{width:'200px',textAlign:'center',height:'50px',backgroundColor:'red',flexShrink: '0'}}>hh</div>
  })
  return (
    <>
     <Button type='primary' size='large' circle onClick={add} >hhh</Button>
     <KBadge value={9} max={90}><Button onClick={del} >hhh</Button></KBadge>
     <KLink href='https://www.baidu.com' type='primary' underline>hh</KLink>
     <a ref={link2} onClick={()=>{
      console.log(link2.current)
    }}>a</a>
     <KScrollbar height='400px'>
     <div style={{display:'flex',flexDirection:'column'}}>
      {hh}
     </div>
     </KScrollbar>
     <Affix offset={120}>hh</Affix>
     <KCard style={{width:'200px'}} title='hh'>
      <div>hh</div>
      <div>hh</div>
     </KCard>
     <KCarousel >
     <div style={{backgroundColor:'green'}}>Item 1</div>
     <div>Item 2</div>
     <div style={{backgroundColor:'blue'}} >Item 3</div>
     </KCarousel>
     <KCollapse accordion={true}></KCollapse>
     <Empty></Empty>
     <Progress ></Progress>
     <Progress type='circle'></Progress>
     <Progress type='dashboard'></Progress>
     <Result icon= 'success' title='Suceess Tip' subTitle='please follow the instructins'></Result>
     <Result icon='error' title='Error Tip' subTitle='please follow the instructins'></Result>
      <Skeleton animated></Skeleton>
      <Tag>hhh</Tag>
      <Tag effect='plain' closed>hhh</Tag>
      <Tag effect='light'>hhh</Tag>
      <Watermark cross={true}></Watermark>
      <Timeline items={[{children:'test',time: '2019-01-01',color:'red'},{children:'test',color:'blue'}]}></Timeline>
      <Backtop></Backtop>
      <Breadcrumb></Breadcrumb>
      <Dropdown><div style={{width: '100px',height: '100px',background: 'red'}}>123</div></Dropdown>
      <div style={{width: '100px',height: '100px',background: 'blue'}}>123</div>
      <Tabs></Tabs>
      <Alert style={{minWidth:'400px',margin:'20px'}} description='这是个描述' icon title='hhh'></Alert>
      <Alert title='laila'></Alert>
      <Dialog isshow={isshow} onOk={()=>{close()}}> hhh</Dialog>
      <Button onClick={()=>{
        open()
      }}>点击</Button>
      <Drawer isshow={isshow} closed={()=>{close()}}>内容</Drawer>
      <Button plain={true} >点击</Button>
      <div className="global-component">
      {/* 其他组件内容 */}
      <div className="arrow"></div> {/* 显示箭头 */}
      <Message><Shi></Shi></Message>
      <Autocomplete></Autocomplete>
      <Input close></Input>
      <Radio option={[{value:'1'},{value:'2',disabled:true}]} value='1'></Radio>
      <Radio option={[{value:'1'},{value:'2'}]} value='1'></Radio>
      <Select disabled={true}></Select>
       <div style={{width:'200px',height:'200px'}}></div>
      <Slider></Slider>
      <Switch disabled value={value} onClick={(e)=>{
        setValue(!value)
      }}></Switch>
    </div>
    </>
  )
}
const Shi = ()=>{
  
 const {KMessage}=useMessage()
  return <Button onClick={()=>{
    KMessage({
      type:'success',
      message:'hhh'
    })
  }}>hhh</Button>
}
export default App
