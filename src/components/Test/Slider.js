/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 2016/11/10
 * Time: 下午3:23
 */
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '1',
            openKeys: [],
        }
        this.onOpenChange = this.onOpenChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    getKeyPath(key) {
        const map = {
            sub1: ['sub1'],
            sub2: ['sub2'],
            sub3: ['sub3'],
            sub4: ['sub4'],
            sub5: ['sub5'],
            sub6: ['sub6'],
        };
        return map[key] || [];
    }

    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
        this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({ current: e.key });
    }

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 200 }}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
                className="e-menu"
            >
                <Menu.Item key="sub1">
                    <Icon type="user" />
                    个人中心
                </Menu.Item>
                <SubMenu key="sub2" title={<span><Icon type="tag-o" /><span>订单管理</span></span>}>
                    <Menu.Item key="2">我接到的订单</Menu.Item>
                    <Menu.Item key="3">我下的订单</Menu.Item>
                </SubMenu>
                <Menu.Item key="sub3"><Icon type="paper-clip" />我的需求</Menu.Item>
                <SubMenu key="sub4" title={<span><Icon type="heart-o" /><span>我的收藏</span></span>}>
                    <Menu.Item key="5">献计</Menu.Item>
                    <Menu.Item key="6">微课</Menu.Item>
                    <Menu.Item key="7">专家</Menu.Item>
                </SubMenu>
                <Menu.Item key="sub5"><Icon type="edit" />提问献计</Menu.Item>
                <SubMenu key="sub6" title={<span><Icon type="setting" /><span>个人设置</span></span>}>
                    <Menu.Item key="9">基本信息</Menu.Item>
                    <Menu.Item key="10">修改手机</Menu.Item>
                    <Menu.Item key="11">修改密码</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

Slider.propTypes = {};
Slider.defaultProps = {};

export default Slider;

