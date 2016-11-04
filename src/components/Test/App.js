/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午3:38
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header></Header>
                <div className="content">
                    <div className="container">
                        <div className="flex">
                            <div className="one">
                                <div>
                                    <Link to="/" activeClassName="on">nav-1</Link>
                                </div>
                                <div>
                                    <Link to="nav1" activeClassName="on">nav-2</Link>
                                </div>
                                <div>
                                    <Link to="nav2" activeClassName="on">nav-3</Link>
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

