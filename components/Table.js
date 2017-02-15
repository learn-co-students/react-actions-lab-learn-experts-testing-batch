'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    return(
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {this.props.table.map (
            (row, rowNumber) =>
              <Row
                row={row}
                key={rowNumber}
                onChange={this.props.onChange.bind(null, rowNumber)}
                onFocus={this.props.onFocus.bind(null, rowNumber)}
              />
          )}
        </tbody>
      </table>
    );
  }
}

module.exports = Table;
