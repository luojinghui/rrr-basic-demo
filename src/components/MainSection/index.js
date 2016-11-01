
import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import TodoTextInput from '../TodoTextInput'
import Footer from '../Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return <input
        className={style.toggleAll}
        type="checkbox"
        checked={completedCount === todos.length}
        onChange={actions.completeAll} />
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={::this.handleClearCompleted}
          onShow={::this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props

    return (
      <section>
        <TodoTextInput
            newTodo
            onSave={::this.handleSave}
            placeholder="What needs to be done?" />
        <ul>
          <li>123</li>
          <li>234</li>
        </ul>
      </section>
    )
  }
}

export default MainSection
