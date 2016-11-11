/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 2016/11/10
 * Time: 下午3:23
 */
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { IndexLink } from 'react-router'
const SubMenu = Menu.SubMenu;



class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '1'
        }
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({ current: e.key });
    }

    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)}
                  style={{ width: 200 }}
                  defaultOpenKeys={['sub2']}
                  selectedKeys={[this.state.current]}
                  mode="inline"
            >
                <Menu.Item key="sub1">
                    <IndexLink to="/" activeClassName="on">
                        <Icon type="user" />
                        个人中心
                    </IndexLink>
                </Menu.Item>
                <SubMenu key="sub2" title={<span><Icon type="tag-o" /><span>订单管理</span></span>}>
                    <Menu.Item key="2" className="sub-mini">我接到的订单</Menu.Item>
                    <Menu.Item key="3" className="sub-mini">我下的订单</Menu.Item>
                </SubMenu>
                <Menu.Item key="sub3"><Icon type="paper-clip" />我的需求</Menu.Item>
                <SubMenu key="sub4" title={<span><Icon type="heart-o" /><span>我的收藏</span></span>}>
                    <Menu.Item key="5" className="sub-mini">献计</Menu.Item>
                    <Menu.Item key="6" className="sub-mini">微课</Menu.Item>
                    <Menu.Item key="7" className="sub-mini">专家</Menu.Item>
                </SubMenu>
                <Menu.Item key="sub5"><Icon type="edit" />提问献计</Menu.Item>
                <SubMenu key="sub6" title={<span><Icon type="setting" /><span>个人设置</span></span>}>
                    <Menu.Item key="9" className="sub-mini">基本信息</Menu.Item>
                    <Menu.Item key="10" className="sub-mini">修改手机</Menu.Item>
                    <Menu.Item key="11" className="sub-mini">修改密码</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

Slider.propTypes = {};
Slider.defaultProps = {};

export default Slider;

