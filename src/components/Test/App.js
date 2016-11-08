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
                            <div className="one">
                                <div>
                                    <IndexLink to="/" activeClassName="on">nav-1</IndexLink>
                                </div>
                                <div>
                                    <Link to="nav1" activeClassName="on" onClick={this.getNavTwoData}>nav-2</Link>
                                </div>
                                <div>
                                    <Link to="nav2" activeClassName="on" onClick={this.getNavThreeData}>nav-3</Link>
                                </div>
                            </div>
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

