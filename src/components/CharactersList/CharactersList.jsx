import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './CharactersList.module.sass'

export default class CharactersList extends Component {
  render() {
    const { characters } = this.props
    return (
      <div className={styles.CharactersList}>
        { characters && characters.map( (char, index) => (
          <div className={styles.character} key={char.name}>
            {char.name}
            <input type='number' name='initiative' value={char.initiative} onChange={(e) => this.props.changeInitiative(index, e.target.value)}/>
          </div>
        )) }
      </div>
    )
  }
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeInitiative: PropTypes.func.isRequired
}
