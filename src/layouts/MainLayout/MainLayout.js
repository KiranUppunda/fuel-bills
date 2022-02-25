import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  FileTextOutlined,
  TeamOutlined,
  UserOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
const { Header, Content, Sider } = Layout;

export default class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  
  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink className="links" to={`/`}>Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusCircleOutlined />}>
              <NavLink className="links" to={`/new-bill`} >Add New Bill</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
              <NavLink className="links" to={`/customers`} >Customers</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileTextOutlined />}>
              <NavLink className="links" to={`/bills`} >All Bills</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <NavLink className="links" to={`/account`} >Account</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}