import React, { Component, useState } from 'react'
import './App.css'
import Searchbar from './components/searchbar'
import SearchList from './components/searchList'
function App() {
  const [results, setResults] = useState([])
  return (
    <div className='App'>
      <div className='search-bar-container'>
        <Searchbar setResults={setResults} />
        <SearchList results={results} />
      </div>
    </div>
  )
}

export default App
