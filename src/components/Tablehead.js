import React from 'react'

const Tablehead = ({ sort }) => (
    <thead>
      <tr>
        <th onClick={() => {sort('name')}}>Name</th>
        <th onClick={() => {sort('position')}}>Position</th>
        <th onClick={() => {sort('office')}} >Office</th>
        <th onClick={() => {sort('age')}}>Age</th>
        <th onClick={() => {sort('startDate')}}>Start Date</th>
        <th onClick={() => {sort('salary')}}>Salary</th>
      </tr>
    </thead>
)


export default Tablehead