import { Layout } from 'antd';
import './Header.css'
const { Header } = Layout;
export default function JHeader() {
  return (
    <Header className="header">
      <div className="header-text">HTML转markDown</div>
    </Header>
  )
}