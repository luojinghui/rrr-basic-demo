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

class App extends Component {
    constructor(props) {
        super(props)
        this.getNavTwoData = this.getNavTwoData.bind(this);
        this.getNavThreeData = this.getNavThreeData.bind(this);
    }

    getNavTwoData() {
        const dispatch = this.props.dispatch;

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
                <Header></Header>
                <div className="content">
                    <div className="container">
                        <div className="flex">
                            {/*<div className="one">*/}
                                {/*<div>*/}
                                    {/*<IndexLink to="/" activeclassName="on">nav-1</IndexLink>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                    {/*<Link to="nav1" activeclassName="on" onClick={this.getNavTwoData}>nav-2</Link>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                    {/*<Link to="nav2" activeclassName="on" onClick={this.getNavThreeData}>nav-3</Link>*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            <ul className="one">
                                <li className="nav-1">
                                    <IndexLink to="/" activeClassName="on open">第一步</IndexLink>
                                </li>
                                <li className="nav-1">
                                    <Link to="nav1" activeClassName="on open" onClick={this.getNavTwoData}>第二步</Link>
                                    <ul className="one two">
                                        <li>
                                            <IndexLink to="nav1" activeClassName="on open">1-1</IndexLink>
                                        </li>
                                        <li>
                                            <Link to="nav1/nav12" activeClassName="on open">1-2</Link>
                                        </li>
                                        <li>1-3</li>
                                    </ul>
                                </li>
                                <li className="nav-1">
                                    <Link to="nav2" activeClassName="on open" onClick={this.getNavThreeData}>第三步</Link>
                                    <ul className="one two">
                                        <li className="on">1-1</li>
                                        <li>1-2</li>
                                        <li>1-3</li>
                                    </ul>
                                </li>
                            </ul>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(App);

