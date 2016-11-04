/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/4
 * Time: 下午3:18
 */
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li>
                        <a className="on" href="">index</a>
                    </li>
                    <li>
                        <a href="">weike</a>
                    </li>
                    <li>
                        <a href="">serve</a>
                    </li>
                </ul>
            </header>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
