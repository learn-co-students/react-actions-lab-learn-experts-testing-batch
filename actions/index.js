'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const newTable = this.state.table.map(row => row.concat(''));
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault();
  const newTable = [
    ...this.state.table,
    this.state.table[0].map(()=> '')
  ]
  this.setState({table: newTable})
}

function changeCell (rowIndex, columnIndex, ev) {
  const updateRow = [...this.state.table[rowIndex]];
  updateRow.splice(columnIndex, 1, ev.target.value);

  const updateTable = [...this.state.table.slice()];
  updateTable.splice(rowIndex, 1, updateRow);

  this.setState({
    table: updateTable
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
  if(this.state.table.length > 1){
    const updateTable = this.state.table.slice(0, -1);
    this.setState({table: updateTable})
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if(this.state.table[0].length > 1){
    const updateTable = this.state.table.map(row => row.slice(0, -1))
    this.setState({table: updateTable});
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
