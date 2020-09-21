import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  renderImage = () => {
    if(this.state.clicked){
      return <img alt="oh no!" src={this.props.pokemon.sprites.back}/>
    } else {
      return <img alt="oh no!" src={this.props.pokemon.sprites.front}/>
    }
    
  }

  clickHandler = () => {
    let previousState = this.state.clicked
    this.setState({
      clicked: !previousState
    })
  }


  render() {
    return (
      <Card>
        <div onClick={this.clickHandler}>
          <div className="image">
            {this.renderImage()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
