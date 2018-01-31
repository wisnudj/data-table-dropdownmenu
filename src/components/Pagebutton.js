import React from 'react'

const Pagebutton = ({ pageNumber, changePage, current }) => {
  return(
    <ul style={{listStyle: 'none', display: "flex"}}>
      {pageNumber && pageNumber.map((element, index) => {
        var background = (element === current) ? "red": "white"
        console.log(background)
        return(
          <li style={{backgroundColor: background, padding: 5, margin: 5}} key={element} onClick={(e) => changePage(element)}  >{element}</li>
        )
      })}
    </ul>
  )
}

export default Pagebutton;