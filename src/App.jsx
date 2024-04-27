import { Link,Menu ,Scrollbar,Autocomplete} from './components'
import React,{useState,lazy,Suspense} from 'react'
import './App.css'
import { Context } from './Conntext'


  const comMap ={
    Button: lazy(() => import('./views/Button.jsx')),
    Link: lazy(() => import('./views/Link.jsx')),
    Alert: lazy(() => import('./views/Alert.jsx')),
    Avatar: lazy(() => import('./views/Avatar.jsx')),
    Badge: lazy(() => import('./views/Badge.jsx')),
    Breadcrumb: lazy(() => import('./views/Breadcrumb.jsx')),
    Card: lazy(() => import('./views/Card.jsx')),
    Carousel: lazy(() =>import('./views/Carousel.jsx')),
    Collapse: lazy(() => import('./views/Collapse.jsx')),
    Tabs: lazy(() => import('./views/Tabs.jsx')),
    Tag: lazy(() => import('./views/Tag.jsx')),
    Watermark: lazy(() => import('./views/Watermark.jsx')),
  }
  const items = [
    {
      type: 'group',
      label: '通用组件(15)',
      children: [
        {
          label: '按钮 Button',
          key: 'Button',
        },
        {
          label:'连接 Link',
          key: 'Link'
        },
        {
          label: '头像 Avatar',
          key: 'Avatar',
        },
        {
           label: '卡片 Card',
           key: 'Card',
        },
        {
            label: '轮播图 Carousel',
            key: 'Carousel'
        },
        {
            label: '折叠面板 Collapse',
            key: 'Collapse'
        },
        {
            label: '标签 Tag',
            key: 'Tag'
        },
        {
            label: '水印 Watermark',
            key: 'Watermark'
        },
        {
            label: '徽章 Badge',
            key: 'Badge'
        },
        {
          label: '空状态 Empty',
          key: 'Empty'
        },
        ,
        {
          label: '进度条 Progerss',
          key: 'Progerss'
        },
        {
          label: '结果 Result',
          key: 'Result'
        },
        {
          label: '骨架屏 Skeleton',
          key: 'Skeleton'
        },
        {
          label: '表格 Table',
          key: 'Table'
        },
        {
          label: '时间线 Timeline',
          key: 'Timeline'
        },
        {
          label:'滚动条 Scrollbar',
          key:'Scrollbar'
        }
  
    ],
    },
    {
      type: 'group',
      label:'导航组件(6)',
      children:[
        {
          label: '标签页 Tabs',
          key: 'Tabs'
        }, 
        {
           label:'固钉 Affix',
           key:'Affix'
        },
        {
          label: '面包屑 Breadcrumb',
          key: 'Breadcrumb'
        },
        {
          label: '下拉菜单 Dropdown',
          key: 'Dropdown'
        },
        {
           label: '菜单 Menu',
           key: 'Menu'
        },
        {
          label: '回到顶部 Backtop',
          key: 'Backtop'
        }


    ]
    },{
      type:'group',
      label:'反馈组件(4)',
      children:[
        {
          label:'提示 Alert',
          key:'Alert'
        }         ,
        {
          label: '对话框 Dialog',
          key: 'Dialog'
        },
        {
          label: '抽屉 Drawer',
          key: 'Drawer'
        },
        {
          label: '消息 Message',
          key: 'Message'
        },
      
      ]
    },
    {
       type:'group',
       label:'表单组件(6)',
       children:[
        {
          label:'输入框 Input',
          key:'Input'
        },
        {
          label:'选择器 Select',
          key:'Select'
        },
        {
          label:'单选框 Radio',
          key:'Radio'
        },
        {
          label:'开关 Switch',
          key:'Switch'
         },
         {
          label:'自动补全输入框 Autocomplete',
          key:'Autocomplete'
         },
         {
          label:'滑块 Slider',
          key:'Slider'
         }
       ]
    }

];
const List = [...items[0].children,...items[1].children,...items[2].children,...items[3].children]

function App() {
  const [comName,setComName] = useState('Button')
  let Com = comMap[comName] || Loading
  const ChangeComName = (n)=> {
      setComName(n.key)
  }

  return (
    <>
     <Headers List={List} onClickSelect={ChangeComName}></Headers>
     <div style={{display:'flex',height:'calc(100vh - 51px)'}}>
      <Scrollbar width='300px'>
      <Menu onChange={ChangeComName} items={items} ></Menu>
      </Scrollbar>
      <div style={{width:'100%' ,overflow:'hidden',borderLeft:'1px solid #eee'}}>
       <Suspense >
        <Com></Com>
        </Suspense>
      </div>
     </div>
    </>
  )
  function Loading(){
    return(
      <Context title='组件已经完成，文档正在加紧写...'></Context>
    )
  }
  // const {KMessage}=useMessage()
  // const link1 = useRef(null)
  // const link2 = useRef(null)
  // const [value,setValue] = useState(true)
  // const [isshow,setIsshow]= useState(false)
  // function open(){
  //   setIsshow(true)
  // }
  // function close(){
  //   setIsshow(false)
  // }



  // const [link,setlink] = useState([...Array(9)])
  // const add = ()=>{
  //   setlink([...link,1])
  // }
  // const del = ()=>{
  //   setlink(link.slice(0,link.length-1))
  // }
  // const hh = link.map((_,index)=>{
  // return  <div key={index} style={{width:'200px',textAlign:'center',height:'50px',backgroundColor:'red',flexShrink: '0'}}>hh</div>
  // })
  // return (
  //   <>
  //    <Button type='primary' size='large' circle onClick={add} >hhh</Button>
  //    <KBadge value={9} max={90}><Button onClick={del} >hhh</Button></KBadge>
  //    <KLink href='https://www.baidu.com' type='primary' underline>hh</KLink>
  //    <a ref={link2} onClick={()=>{
  //     console.log(link2.current)
  //   }}>a</a>
  //    <KScrollbar height='400px'>
  //    <div style={{display:'flex',flexDirection:'column'}}>
  //     {hh}
  //    </div>
  //    </KScrollbar>
  //    <Affix offset={120}>hh</Affix>
  //    <KCard style={{width:'200px'}} title='hh'>
  //     <div>hh</div>
  //     <div>hh</div>
  //    </KCard>
  //    <KCarousel >
  //    <div style={{backgroundColor:'green'}}>Item 1</div>
  //    <div>Item 2</div>
  //    <div style={{backgroundColor:'blue'}} >Item 3</div>
  //    </KCarousel>
  //    <KCollapse accordion={true}></KCollapse>
  //    <Empty></Empty>
  //    <Progress ></Progress>
  //    <Progress type='circle'></Progress>
  //    <Progress type='dashboard'></Progress>
  //    <Result icon= 'success' title='Suceess Tip' subTitle='please follow the instructins'></Result>
  //    <Result icon='error' title='Error Tip' subTitle='please follow the instructins'></Result>
  //     <Skeleton animated></Skeleton>
  //     <Tag>hhh</Tag>
  //     <Tag effect='plain' closed>hhh</Tag>
  //     <Tag effect='light'>hhh</Tag>
  //     <Watermark cross={true}></Watermark>
  //     <Timeline items={[{children:'test',time: '2019-01-01',color:'red'},{children:'test',color:'blue'}]}></Timeline>
  //     <Backtop></Backtop>
  //     <Breadcrumb></Breadcrumb>
  //     <Dropdown><div style={{width: '100px',height: '100px',background: 'red'}}>123</div></Dropdown>
  //     <div style={{width: '100px',height: '100px',background: 'blue'}}>123</div>
  //     <Tabs></Tabs>
  //     <Alert style={{minWidth:'400px',margin:'20px'}} description='这是个描述' icon title='hhh'></Alert>
  //     <Alert title='laila'></Alert>
  //     <Dialog isshow={isshow} onOk={()=>{close()}}> hhh</Dialog>
  //     <Button onClick={()=>{
  //       open()
  //     }}>点击</Button>
  //     <Drawer isshow={isshow} closed={()=>{close()}}>内容</Drawer>
  //     <Button plain={true} >点击</Button>
  //     <div className="global-component">
  //     {/* 其他组件内容 */}
  //     <div className="arrow"></div> {/* 显示箭头 */}
  //     <Message><Shi></Shi></Message>
  //     <Autocomplete></Autocomplete>
  //     <Input close></Input>
  //     <Radio option={[{value:'1'},{value:'2',disabled:true}]} value='1'></Radio>
  //     <Radio option={[{value:'1'},{value:'2'}]} value='1'></Radio>
  //     <Select disabled={true}></Select>
  //      <div style={{width:'200px',height:'200px'}}></div>
  //     <Slider></Slider>
  //     <Switch disabled value={value} onClick={(e)=>{
  //       setValue(!value)
  //     }}></Switch>
  //   </div>
   // </>
  //)
}
const Headers = ({onClickSelect,...props})=>{

  return (
    <div style={{borderBottom:'1px solid #eee',margin:'0 20px',display:'flex',justifyContent:'space-between',height:'50px',alignItems:'center'}}>
      <span style={{fontSize:'20px',color:'skyblue'}}><strong>Kcode-UI</strong></span>
        <Autocomplete placeholder='搜索内容' onClickSelect={onClickSelect} option={List} style={{width:'200px',flexGrow:'1',marginRight:'600px'}}></Autocomplete>
        <div>
      <Link href="https://github.com/hui455/kcode-ui">
      <svg t="1714120577821" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4255" width="20" height="20"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="4256"></path></svg>
      </Link>
    </div>
    </div>
  )
}
export default App
