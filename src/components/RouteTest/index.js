import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../Header';
import style from '../../containers/App/style.less'

class RouteTest extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <div className={style.normal}>
          <Header></Header>
          <div>
              <div>
                  <ul>
                      <li>123</li>
                      <li>zxcv</li>
                      <li>asd</li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }
}

RouteTest.defaultProps = {"items" :['Apple', 'Banana', 'Cranberry']};

export default RouteTest
