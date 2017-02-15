'use strict';

function addColumn (ev) {
  ev.preventDefault();
  let table = this.state.table
  table.forEach(column => column.push(''))
  this.setState({
    table: table
  })
}

function addRow (ev) {
  ev.preventDefault();
  let table = this.state.table
  let row = Array(table[0].length)
  table.push(row.fill(""))
  this.setState({
    table: table
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let table = this.state.table
  table[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: table
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault();
  let table = this.state.table
  if (table.length > 1) {
    this.setState({
      table: table.slice(0, -1)
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  let table = this.state.table
  if (table[0].length > 1) {
    table.forEach((row) => row.pop())
    this.setState({
      table: table
    })
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
