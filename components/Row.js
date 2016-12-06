'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const cells = this.props.row.map((cell, i) => {
      return (
        <Cell cell={cell} key={i}
          onChange={this.props.onChange.bind(null, i)}
          onFocus={this.props.onFocus.bind(null, i)}
          />
      )
    })

    return(
      <tr className='row'>
        {cells}
      </tr>
    )
  }
}

module.exports = Row;
