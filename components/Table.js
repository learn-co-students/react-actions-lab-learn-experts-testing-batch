'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const rows = this.props.table.map((row, i) => {
      return(
        <Row row={row} key={i}
          onChange={this.props.onChange.bind(null, i)}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus.bind(null, i)}
        />
      )
    })
    return(
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
