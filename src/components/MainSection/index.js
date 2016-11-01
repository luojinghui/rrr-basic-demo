
import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const mr20 = {marginRight: '20px'};
    const { initData } = this.props

    return (
      <section>
        <ul>
          {
            _.map(initData.item,(val, index) => {
              return (
                  <li key={index}>
                    <span style={mr20}>{val.name}</span>
                    <span style={mr20}>{val.author}</span>
                  </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => (state);

let wrapedMainSection = connect(mapStateToProps)(MainSection);

export default wrapedMainSection;
