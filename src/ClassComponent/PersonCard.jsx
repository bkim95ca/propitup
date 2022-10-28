import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    console.log(this.props.hairColor)
    return (
      <>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.props.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        {/* <button onClick={() => this.increaseNum()}>Add Age</button> */}
      </>
    )
  }
}
