import React, { Component } from 'react';

class Searchname extends Component {
  render () {
    const { filterName } = this.props 
    return(
      <div>
        <label style={{paddingRight: 5}}>Search:</label>
        <input type="text" id="myInput" onChange={(e) => {filterName(e.target.value)}} placeholder="Search for names.." />
      </div>
    )
  }
}

export default Searchname