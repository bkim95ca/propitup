import React, { Component } from 'react'

export default class PersonCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      age: this.props.age
    }
  }

  increaseNum = () => {
    let age = this.state.age + 1;
    this.setState({age : age});
  }


  render() {
    console.log(this.props.hairColor)
    return (
      <>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={this.increaseNum}>Add Age</button>
      </>
    )
  }
}
