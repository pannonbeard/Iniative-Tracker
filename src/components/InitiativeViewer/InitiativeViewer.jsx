import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './InitiativeViewer.module.sass'

export default class IniativeViewer extends Component {
  componentDidMount(){
    document.addEventListener('keypress', this.goToNextCharacter)
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.goToNextCharacter)
  }

  goToNextCharacter = (e) => {
    if(e.charCode === 13){
      this.props.nextCharacter()
    }
  }

  render() {
    return (
      <div className={styles.IniativeViewer} style={{backgroundColor: this.props.background_color}}>
        <div className={styles.CharacterName}>
          {this.props.character.name}
          <div className={styles.tagline}>Press 'Enter' to move forward</div>
        </div>
        <button className={styles.FloatingButton} onClick={this.props.toggleinitiative}>End Battle</button>
      </div>
    )
  }
}

IniativeViewer.propTypes = {
  character: PropTypes.object.isRequired,
  background_color: PropTypes.string.isRequired,
  toggleinitiative: PropTypes.func.isRequired,
  nextCharacter: PropTypes.func.isRequired,
}