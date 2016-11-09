/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 2016/11/8
 * Time: 下午6:03
 */
import React, {Component} from 'react';
import {IndexLink} from 'react-router'

class Inbox1 extends Component {
    render() {
        return (
            <ul className="one two">
                <li>
                    <IndexLink to="/" activeClassName="on open">1-1</IndexLink>
                </li>
                <li>1-2</li>
                <li>1-3</li>
            </ul>
        );
    }
}

Inbox1.propTypes = {};
Inbox1.defaultProps = {};

export default Inbox1;
