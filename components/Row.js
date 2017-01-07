'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const { row, onChange, onFocus } = this.props;
    return(
      <tr className="row">
        {row.map((cell, index) => {
          return <Cell onChange={onChange.bind(null, index)} onFocus={onFocus.bind(null, index)} cell={cell} key={index}/>
        })}
      </tr>
    )
  }
}

module.exports = Row;
