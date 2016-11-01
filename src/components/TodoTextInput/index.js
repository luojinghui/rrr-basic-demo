
import React, { Component } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <input className="input"
        type="text"
        autoFocus="true"
      />
    )
  }
}

export default TodoTextInput
