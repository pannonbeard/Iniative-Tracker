import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './AddCharacterForm.module.sass'

export default class AddCharacterForm extends Component {
  state = {
    name: '',
    initiative: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      name: '',
      initiative: 0
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.AddCharacterForm}>
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
