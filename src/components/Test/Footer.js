/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午3:19
 */
import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import { Row, Col } from 'antd';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Row >
                    <Col span={8} className="tc">
                        <IndexLink to="/">
                            <span>Index</span>
                        </IndexLink>
                    </Col>
                    <Col span={8} className="tc">
                        <span>下载app</span>
                    </Col>
                    <Col span={8} className="tc">
                        <span>联系我们</span>
                    </Col>
                </Row>
            </footer>
        );
    }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
