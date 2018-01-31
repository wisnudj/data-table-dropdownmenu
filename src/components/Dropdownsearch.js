import React, { Component } from 'react'
import './DropDownStyle.css'

//component
import Dropdown from './Dropdown'

class Dropdownsearch extends Component {

  constructor() {
    super()

    this.state = {
      dropdownVisible: false,
      initialdropdownMenu: ['About', 'Base', 'Blog', 'Contact', 'Custom', 'Support', 'Tools'],
      dropdownMenu: ['About', 'Base', 'Blog', 'Contact', 'Custom', 'Support', 'Tools']
    }

    this.filterMenu = this.filterMenu.bind(this)
  }

  changeDropdownvisible() {
    var visible;
    if(this.state.dropdownVisible) {
      visible = false
    } else {
      visible = true
    }

    this.setState({
      dropdownVisible: visible
    })
  }

  filterMenu(menu) {
    var regex = new RegExp(menu, 'i')

    var filterMenu = this.state.initialdropdownMenu.filter((element) => {
      return regex.test(element)
    })

    this.setState({
      dropdownMenu: filterMenu
    })
  }

  render() {
    return(
      <div>
        <button onClick={() => this.changeDropdownvisible()} class="dropbtn">Dropdown</button>
        {this.state.dropdownVisible && 
          <Dropdown filterMenu={this.filterMenu} dropdownMenu={ this.state.dropdownMenu } />        
        }
      </div>
    )
  }
}

export default Dropdownsearch