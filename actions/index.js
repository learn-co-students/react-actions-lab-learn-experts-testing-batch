'use strict';
//
function addColumn(ev) {
  ev.preventDefault();

  this.setState({
    table: this.state.table.map(row => [...row, ''])
  });
}

function addRow(ev) {
  ev.preventDefault();
  this.setState({
    table: [...this.state.table, this.state.table[0].map(()=>'')]
  })
}

function changeCell(rowIn, columnIn, ev){
  const updatedRow = [...this.state.table[rowIn]]

  updatedRow.splice(columnIn, 1, ev.target.value)

  const updatedTable = [...this.state.table.slice()]

  updatedTable.splice(rowIn, 1, updatedRow)

  this.setState({
    table: updatedTable
  })
}

function focusCell(rowIndex, columnIndex){
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell(){
  this.setState({
    focused: null
  })

}

function removeRow(ev){
  ev.preventDefault()
  this.state.table.length > 1 ? this.setState({table: this.state.table.slice(0, -1)}) : console.log('Cannot remove only row')
}

function removeColumn(ev){
  ev.preventDefault();
  this.state.table[0].length > 1 ? this.setState({table: this.state.table.map(row=>row.slice(0, -1))}) : console.log('cannot remove only column')
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
