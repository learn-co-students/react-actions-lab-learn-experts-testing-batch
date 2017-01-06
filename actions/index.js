'use strict';

function addColumn (ev) {
  ev.preventDefault()
  const newTable = this.state.table
    .map(row => row.concat(''));
  this.setState({
    table: newTable
  });
}

function addRow (ev) {
  ev.preventDefault()
  const newTable = [
    ...this.state.table,
    this.state.table[0].map(() => '')
  ]

  this.setState({table: newTable})
}

function changeCell (rowIndex, columnIndex, ev) {
  const updatedRow = [...this.state.table[rowIndex]];

  updatedRow.splice(columnIndex, 1, ev.target.value);

  const updatedTable = [...this.state.table.slice()];

  updatedTable.splice(rowIndex, 1, updatedRow);

  this.setState({
    table: updatedTable
  });
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })

}

function blurCell () {
  this.setState({focused: null})
}

function removeRow (ev) {
  ev.preventDefault()
  if (this.state.table.length > 1) {
    const newTable = this.state.table.slice(0, -1)
    this.setState({table: newTable})
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  console.log(this.state.table)
  if (this.state.table[0].length > 1) {
    const newTable = this.state.table.map(row => row.slice(0,-1))
    this.setState({table: newTable})
  }
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
