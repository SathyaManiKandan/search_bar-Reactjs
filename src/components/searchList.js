import React from 'react'
import SingleResult from './singleResult.js'
import './searchList.css'
function searchList({ results }) {
  console.log(results)
  return (
    <div className='list-container'>
      {results.map((result) => {
        return <SingleResult key={result.id} name={result.name} />
      })}
    </div>
  )
}

export default searchList
