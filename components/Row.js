'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {

  render () {
    return (
      <tr className="row">
        {this.props.row.map (
          (cell, columnNumber) =>
            <Cell
              key={columnNumber}
              cell={cell}
              onChange={this.props.onChange.bind(null, columnNumber)}
              onFocus={this.props.onFocus.bind(null, columnNumber)}/>
          )}
      </tr>
    );
  }
}

module.exports = Row;
