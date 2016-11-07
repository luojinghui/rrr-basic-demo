/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午6:50
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

class NavOne extends Component {
    render() {
        const { nav1 } = this.props;

        return (
            <div className="nav2">
                {
                    nav1.song ? (
                        <div>
                            <h3>{nav1.song}</h3>
                            <h3>{nav1.author}</h3>
                            <h3>{nav1.time}</h3>
                        </div>
                    ) : "loading..."
                }
            </div>
        );
    }
}

NavOne.propTypes = {};
NavOne.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        nav1: state.initNav.nav1
    }
}

export default connect(mapStateToProps)(NavOne);
