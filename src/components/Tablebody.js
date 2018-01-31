import React from 'react'

const Tablebody = ({ show, dataTable }) => {

  return (
    <tbody>
      {dataTable && dataTable.map((element, index) => {
        return (
          <tr key={index}>
            <td>{element.name}</td>
            <td>{element.position}</td>
            <td>{element.office}</td>
            <td>{element.age}</td>
            <td>{element.startDate}</td>
            <td>{element.salary}</td>
          </tr>
        )
      })}
    </tbody>
)}

export default Tablebody