import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './searchbar.css'
function Searchbar({ setResults }) {
  const [input, setInput] = useState('')
  // const [results, setResults] = useState([])

  const handleChange = async (value) => {
    setInput(value)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()

      let newResult = data.filter((user) => {
        return value && user.name && user.name.toLowerCase().includes(value)
      })
      console.log(newResult)
      setResults(newResult)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        className='input'
        value={input}
        type='text'
        onChange={(e) => {
          handleChange(e.target.value)
        }}
        placeholder='Type to search...'
      />
    </div>
  )
}

export default Searchbar
