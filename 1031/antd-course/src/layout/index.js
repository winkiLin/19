/*
 * @Description: 基本布局
 * @Author: Do not edit
 * @Date: 2019-10-31 13:52:10
 * @LastEditTime: 2019-10-31 14:43:57
 * @LastEditors: winki
 */
import {Component} from 'react';
import {Layout,Menu,Icon} from 'antd';

// Header,Footer,Sider,Content在Layout模块中
const { Header,Footer,Sider,Content} = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;
export default class BasicLayout extends Component{
    // 渲染
    render(){
        return(
            <Layout>
                <Sider width={256} style={{minHeight:'100vh',color:'white'}}>
                    <div style={{height:'32px',background:'rgba(255,255,255,.2)',margin:'16px'}}></div>
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Icon type='pie-chart'></Icon>
                            <span>Hello winki</span>
                        </Menu.Item>
                        <SubMenu key='sub1' title={<span><Icon type='dashboard'></Icon><span>Dashboard</span></span>}>
                            <Menu.Item key='2'>分析页</Menu.Item>
                            <Menu.Item key='3'>监控页</Menu.Item>
                            <Menu.Item key='4'>工作台</Menu.Item>
                        </SubMenu>  
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background:'#fff',textAlign:'center',padding:0}}>Header</Header>
                    <Content style={{margin:'24px 16px 0'}}>
                        <div style={{padding:24,background:'#fff',minHeight:360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign:'center'}}>Ant Design ©2019 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
} 


