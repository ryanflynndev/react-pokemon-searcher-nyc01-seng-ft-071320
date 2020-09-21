import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchValue: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  searchHandler = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  
  filteredPokemon = () => {
    return this.state.pokemon.filter(poke => poke.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  submitHandler = (pokeObj) => {
    console.log(pokeObj)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(pokeObj)
    }).then(response => response.json())
    .then(newPoke => {
      console.log(newPoke)
      if(newPoke.name){
        let newArray = [newPoke, ...this.state.pokemon]
        this.setState({
          pokemon: newArray
        })
      }

    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm  createPokemon={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler}/>
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
