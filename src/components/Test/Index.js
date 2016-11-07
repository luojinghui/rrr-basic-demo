/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午3:00
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'

class Index extends Component {
    render() {
        const {nav} = this.props;

        return (
            <div className="two">
                <div className="nav1">
                    {
                        nav.song ? (
                            <div>
                                <h3>{nav.song}</h3>
                                <h3>{nav.author}</h3>
                                <h3>{nav.time}</h3>
                            </div>
                        ) : "loading..."
                    }
                </div>
            </div>
        );
    }
}

Index.propTypes = {};
Index.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        nav: state.initNav.nav
    }
}

export default connect(mapStateToProps)(Index);
