/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午6:50
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

class NavTwo extends Component {
    render() {
        const { nav2 } = this.props;

        return (
            <div className="nav2">
                {
                    nav2.song ? (
                        <div>
                            <h3>{nav2.song}</h3>
                            <h3>{nav2.author}</h3>
                            <h3>{nav2.time}</h3>
                        </div>
                    ) : "loading..."
                }
            </div>
        );
    }
}

NavTwo.propTypes = {};
NavTwo.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        nav2: state.initNav.nav2
    }
}

export default connect(mapStateToProps)(NavTwo);