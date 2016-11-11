/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午3:38
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link, IndexLink} from 'react-router'
import request from 'superagent'

import Header from './Header'
import Footer from './Footer'
import Slider from './Slider'
import { Row, Col } from 'antd';


class App extends Component {
    constructor(props) {
        super(props)
        this.getNavTwoData = this.getNavTwoData.bind(this);
        this.getNavThreeData = this.getNavThreeData.bind(this);
    }

    getNavTwoData(e, self) {
        const dispatch = this.props.dispatch;

        console.log(e);
        console.log(self);
        request
            .get('../data/nav1.json')
            .end((err, res) => {
                dispatch({
                    type: 'nav2',
                    data: res.body
                })
            })
    }

    getNavThreeData() {
        const dispatch = this.props.dispatch;

        request
            .get('../data/nav2.json')
            .end((err, res) => {
                dispatch({
                    type: 'nav3',
                    data: res.body
                })
            })
    }

    render() {
        return (
            <div>
                <div>
                    <Header></Header>
                    <div className="content">
                        <div className="container">
                            <div className="e-menu">
                                <Row>
                                    <Col md={5} >
                                        <Slider />
                                    </Col>
                                    <Col md={19}>
                                        {this.props.children}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
{/*<ul className="one">*/}
{/*<li>*/}
{/*<IndexLink to="/" className="nav" activeClassName="open">第一步</IndexLink>*/}
{/*</li>*/}
{/*<li>*/}
{/*<Link to="nav1" className="nav" activeClassName="open" onClick={ this.getNavTwoData.bind(this) }>第二步</Link>*/}
{/*<ul className="sub">*/}
{/*<li>*/}
{/*<IndexLink to="nav1" activeClassName="on">1-1</IndexLink>*/}
{/*</li>*/}
{/*<li>*/}
{/*<Link to="nav1/nav12" activeClassName="on">1-2</Link>*/}
{/*</li>*/}
{/*<li>1-3</li>*/}
{/*</ul>*/}
{/*</li>*/}
{/*<li>*/}
{/*<Link to="nav2" activeClassName="open" className="nav" onClick={this.getNavThreeData}>第三步</Link>*/}
{/*<ul className="sub">*/}
{/*<li>1-1</li>*/}
{/*<li>1-2</li>*/}
{/*<li>1-3</li>*/}
{/*</ul>*/}
{/*</li>*/}
{/*</ul>*/}
const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(App);

