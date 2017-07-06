'use strict';

import React from 'react';

export default class Cell extends React.Component {
  render () {
    return (
      <td className="cell">
        <input
          type="text"
          value={this.props.cell}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
        />
      </td>
    )
  }
}
