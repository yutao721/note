import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import './Header.css'

const { Sider } = Layout;
const items = [
  {
    label: '解析',
    value: 1,
    path: '/'
  },
  {
    label: '上传',
    value: 2,
    path: '/upload'
  },
  {
    label: '关于',
    value: 3,
    path: '/about'
  }
]

export default function JSider() {
  const Itmes = items.map((item, index) =>
    <Menu.Item key={item.value}>
      <Link to={item.path}>{item.label}</Link>
    </Menu.Item>
  )

  function handleClickItem(data) {
    console.log(data)
  }

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        onClick={handleClickItem}>
        {Itmes}
      </Menu>
    </Sider>
  )
}
