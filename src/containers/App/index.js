import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <MainSection />
      </div>
    )
  }
}
App.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object,
  children: PropTypes.node
}

const mapStateToProps = (state) => (state)

export default connect(
  mapStateToProps
)(App)
