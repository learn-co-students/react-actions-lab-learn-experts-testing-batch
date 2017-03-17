'use strict';

function addColumn (ev) {
  ev.preventDefault()
  this.setState({table: this.state.table.map(row => [...row, ''])})
}

function addRow (ev) {
  ev.preventDefault()
  const table = this.state.table
  let newRow = []
  table[0].forEach(() => newRow.push(''))
  this.setState({table: [...table, newRow]})
}

function changeCell (rowIndex, columnIndex, ev) {
  let table = this.state.table
  table[rowIndex][columnIndex] = ev.target.value
  this.setState({table: table})
}

function focusCell (rowIndex, columnIndex) {
  this.setState({focused: [rowIndex, columnIndex]})
}

function blurCell () {
  this.setState({focused: null})
}

function removeRow (ev) {
  ev.preventDefault();
  const table = this.state.table

  if(table.length > 1){
    this.setState({table: table.slice(0,-1)})
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  const table = this.state.table
  if(table[0].length > 1){
    this.setState({table: this.state.table.map(row => row.slice(0,-1))})
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
