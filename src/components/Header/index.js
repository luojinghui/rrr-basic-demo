import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    const style = {
      marginRight: "30px"
    }
    return (
      <header>
        <h1>Router test</h1>
        <Link to="/" style={style} activeClassName="active">home</Link>
        <Link to="/routetest" style={style} activeClassName="active">routetest</Link>
        <Link to="/formtest" style={style} activeClassName="active">formtest</Link>
      </header>
    )
  }
}

export default Header
