import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
      <form onSubmit={this.handleSubmit}>
        <label>Character Name</label>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

AddCharacterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
