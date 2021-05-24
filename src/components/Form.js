import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
      let formData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
      this.sendFormDataSomeWhere(formData)
    
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;