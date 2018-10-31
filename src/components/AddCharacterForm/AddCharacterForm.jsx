import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './AddCharacterForm.module.sass'

export default class AddCharacterForm extends Component {
  state = {
    name: '',
    initiative: 0,
    errors: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.checkIfValid()){
      return
    }

    this.props.handleSubmit({ ...this.state, errors: [] })
    this.setState({
      name: '',
      initiative: 0,
      errors: []
    })
  }

  checkIfValid(){
    if(this.state.name === ''){
      this.setState({ errors: [{ message: 'You need to put in a character name'}]})
      return true
    }
  }

  render() {
    const showErrors = this.state.errors.length > 0 ? '' : 'none'
    return (
      <form onSubmit={this.handleSubmit} className={styles.AddCharacterForm}>
        <ul style={{ display: showErrors }}>
          {this.state.errors && this.state.errors.map(({ message }, index) => <li key={index}>{message}</li>)}
        </ul>
        <div className={styles.FormGroup}>
          <label htmlFor='name'>Char Name: </label>
          <input id='name' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
          <button type='submit'>Add</button>
        </div>
      </form>
    )
  }
}

AddCharacterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
