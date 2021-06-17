import { Layout, Breadcrumb } from 'antd';
import JHeader from './Header'
import JFooter from './Footer'
import JSider from './Sider'
import './layout.css'

import About from '../view/About'
import Home from '../view/Home'
import Upload from '../view/Upload'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const { Content } = Layout;
export default function Jloyout() {
  return (
    <Router>
      <Layout className="layout-main">
        <JSider style={{ paddingTop: '64px' }}></JSider>
        <Layout>

          <JHeader></JHeader>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{ padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/upload" exact component={Upload}></Route>
                <Route path="/about" exact component={About}></Route>
              </Switch>
            </Content>
          </Layout>
          <JFooter></JFooter>
        </Layout>
      </Layout>
    </Router>
  )
}

