'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const cells = this.props.row.map((cell, index)=>(
      <Cell key={index}
            cell={cell}
            onChange={this.props.onChange.bind(null, index)}
            onFocus={this.props.onFocus.bind(null, index)}
      />
    ))
    return (
      <tr className='row'>
        {cells}
      </tr>
    )
  }
}

module.exports = Row;
