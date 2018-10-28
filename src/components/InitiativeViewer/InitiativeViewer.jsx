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
        {this.props.character.name}<br/>
        <button onClick={this.props.toggleinitiative}>Stop initiative</button>
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