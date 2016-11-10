/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午3:18
 */
import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import { Row, Col } from 'antd';

class Header extends Component {
    render() {
        return (
            <header>
                <Row >
                    <Col span={8} className="tc">
                        <IndexLink to="/">
                            <h3>index</h3>
                        </IndexLink>
                    </Col>
                    <Col span={8} className="tc">
                        <h3>weike</h3>
                    </Col>
                    <Col span={8} className="tc">
                        <h3>serve</h3>
                    </Col>
                </Row>
            </header>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
