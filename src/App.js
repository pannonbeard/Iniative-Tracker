import React, {
  Component
} from 'react';

import './App.css';
import AddCharacterForm from './components/AddCharacterForm/AddCharacterForm'
import CharactersList from './components/CharactersList/CharactersList'
import InitiativeViewer from './components/InitiativeViewer/InitiativeViewer'

class App extends Component {
  state = {
    characters: [
      { name: 'Silmandil', initiative: 12 },
      { name: 'Elewin', initiative: 9 },
      { name: 'Aerafin', initiative: 30 },
      { name: 'Baddies', initiative: 15 }
    ],
    initiativeStarted: false,
    current_character: 0,
    current_color: ''
  }

  handleSubmit = (character) => {
    this.setState( (prevState) => {
      return {
        ...prevState,
        characters: [...prevState.characters, character]
      }
    })
  }

  updateInitiative = (index, initiative) => {
    this.setState( (prevState) => {
      let characters = [...prevState.characters]
      characters[index].initiative = initiative
      return {
        ...prevState,
        characters
      }
    })
  }

  toggleinitiative= () => {
    this.setState((prevState) => { 
      let current_color = this.generateColor()
      let characters = [...prevState.characters].sort(
         (char_a, char_b) => char_b.initiative - char_a.initiative
      )
      return {
        ...prevState, 
        characters, 
        initiativeStarted: !prevState.initiativeStarted,
        current_color,
        current_character: 0
      }
    })
  }

  sortByInitiative = () => {
    this.setState((prevState) => {
      let characters = [...prevState.characters].sort(
        (char_a, char_b) => char_b.initiative - char_a.initiative
      )
      console.log(characters)
      return{
        ...prevState,
        characters
      }
    })
  }

  goToNextCharacter = () => {
    this.setState((prevState) => {
      const current_color = this.generateColor()
      let current_character = prevState.current_character + 1
      if(current_character === prevState.characters.length){
        current_character = 0
      }
      return {
        ...prevState,
        current_character,
        current_color
      }
    })
  }

  generateColor(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  }

  handleRemoveCharacter = (index) => {
    this.setState((prevState) => {
      let characters = prevState.characters.filter((char,char_index) => char_index !== index)
      return {
        ...prevState,
        characters
      }
    })
  }

  render() {
    return ( 
      <div className = "App" >
        { 
          this.state.initiativeStarted ?
            <InitiativeViewer 
              toggleinitiative={this.toggleinitiative} 
              character={this.state.characters[this.state.current_character]}
              nextCharacter={this.goToNextCharacter}
              background_color={this.state.current_color}
             />
            : <div className='container'>
                <h1 style={{textAlign: 'center'}}>Iniative Tracker</h1>
                <AddCharacterForm handleSubmit={this.handleSubmit} />
                <CharactersList characters={this.state.characters} changeInitiative={this.updateInitiative}
                removeCharacter={this.handleRemoveCharacter}
                />
                <div className='center'>
                  <button 
                    type='button' 
                    onClick={this.toggleinitiative}>
                      Lets Battle!!
                  </button>
                </div>
              </div>
        }
        
        
      </div>
    );
  }
}

export default App;