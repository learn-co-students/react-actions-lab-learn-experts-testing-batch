'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const { onFocus, onChange, onBlur } = this.props;
    return(
      <table className="table" onBlur={onBlur}>
        <tbody>
          {this.props.table.map((row,index) => {
            return <Row key={index} row={row} onChange={onChange.bind(null, index)}
            onFocus = {onFocus.bind(null, index)}/>
          })}
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
