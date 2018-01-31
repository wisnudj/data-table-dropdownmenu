import React from 'react'

const Selectshow = ({ show, showSelect }) => {
  return(
    <div>
      <label>show</label>
      <select value={show} onChange = {(e) => showSelect(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <label>entries</label>
    </div>
  )
}

export default Selectshow