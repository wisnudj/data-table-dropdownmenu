import React from 'react'

const Dropdown = ({ dropdownMenu, filterMenu }) => {
  return(
    <div id="myDropdown" class="dropdown-content">
      <input onChange={(e) => filterMenu(e.target.value)} type="text" placeholder="Search.." id="myInput" />
      {dropdownMenu.map((element, index) => {
        return(
          <a href="#about" key={index}>{element}</a>
        )       
      })}
    </div>
  )
}

export default Dropdown