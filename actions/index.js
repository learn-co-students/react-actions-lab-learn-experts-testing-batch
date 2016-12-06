'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const newTable = [...this.state.table].map(row => row.concat(''));
  this.setState({table: newTable});
}

function addRow (ev) {
  ev.preventDefault();
  const newTable = [...this.state.table];
  newTable.push([]);
  for(var i = 0; i < newTable[0].length; i++){
    newTable[newTable.length-1].push('');
  }
  this.setState({table: newTable});
}

function changeCell (rowIndex, columnIndex, ev) {
  const newTable = [...this.state.table];
  newTable[rowIndex][columnIndex] = ev.target.value;
  this.setState({table: newTable});
}

function focusCell (rowIndex, columnIndex) {
  this.setState({focused: [rowIndex, columnIndex]});
}

function blurCell () {
  this.setState({focused: null});
}

function removeRow (ev) {
  ev.preventDefault();
  const newTable = [...this.state.table];
  if(newTable.length > 1){
    newTable.pop();
    this.setState({table: newTable});
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  const newTable = [...this.state.table];
  if(newTable[0].length > 1){
    newTable.forEach(row => row.pop());
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
