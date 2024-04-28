import React from 'react'
import { Table } from '../components'
import { Context, ContextItem } from '../Conntext'

export default function Breadcrumb(){
 
  return (
    <Context title='Breadcrumb' describe='显示当前页面的路径，快速返回之前的任意页面。'>
       <ContextItem title='基础用法'>
         <Table columns={columns} data={data1}  width='600px' ></Table>
       </ContextItem>
       <ContextItem title='带斑马纹表格'>
         <Table columns={columns} data={data1} width='600px'  stripe></Table>
       </ContextItem>
       <ContextItem title='带边框表格'>
         <Table columns={columns} data={data1} width='600px'  border></Table>
       </ContextItem>
       <ContextItem title='自定义颜色'>
         <Table columns={columns} data={data2} width='600px'></Table>
       </ContextItem>
       <ContextItem title='固定标题'>
         <Table columns={columns} data={data2} height='150px' width='600px'></Table>
       </ContextItem>
       <ContextItem title='自定义' describe='通过render可以自定义列内容，你可以试试点击' code={code['one']}>
         <div className='k-list'>
         <Table columns={columns1} data={data1}></Table>
         </div>
       </ContextItem>
    </Context>
  )
}

const data1 = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  },
];
const data2 =[...data1, {
  key: '5',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号111111111111',
  color:'#ecf5ff'
},]


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const columns1 = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '200px',
    render:(n)=> <a href='https://www.baidu.com'>{n}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  { 
    width:'200px',
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];


const code={
  one:`
 import { Button } from 'kcode-ui'

  const App = ()=>{
    return(
      <Table columns={columns1} data={data1}></Table>
    )
  }

  const columns1 = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render:(n)=> <a href='https://www.baidu.com'>{n}</a>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data1 = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
  ];
  `
}