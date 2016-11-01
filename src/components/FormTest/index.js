/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/27
 * Time: 下午5:48
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import style from '../../containers/App/style.less'
import Header from '../Header'

class FormTest extends Component {
  render() {
    return (
      <div className={style.normal}>
            <Header></Header>
            <h2>router form test </h2>
      </div>
    )
  }
}

export default FormTest
