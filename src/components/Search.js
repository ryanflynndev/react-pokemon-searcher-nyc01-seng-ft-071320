import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  onChange={(e) => {props.searchHandler(e)}} placeholder="Search for a pokemon"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
