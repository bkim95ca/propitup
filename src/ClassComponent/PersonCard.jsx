import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    console.log(this.props.personFromProps[0])
    return (
      <>
        <h1>{this.props.personFromProps[0].lastName}, {this.props.personFromProps[0].firstName}</h1>
        <p>Age: {this.props.personFromProps[0].age}</p>
        <p>Hair Color: {this.props.personFromProps[0].hairColor}</p>
        <h1>{this.props.personFromProps[1].lastName}, {this.props.personFromProps[1].firstName}</h1>
        <p>Age: {this.props.personFromProps[1].age}</p>
        <p>Hair Color: {this.props.personFromProps[1].hairColor}</p>
        <h1>{this.props.personFromProps[2].lastName}, {this.props.personFromProps[2].firstName}</h1>
        <p>Age: {this.props.personFromProps[2].age}</p>
        <p>Hair Color: {this.props.personFromProps[2].hairColor}</p>
        <h1>{this.props.personFromProps[3].lastName}, {this.props.personFromProps[3].firstName}</h1>
        <p>Age: {this.props.personFromProps[3].age}</p>
        <p>Hair Color: {this.props.personFromProps[3].hairColor}</p>
      </>
    )
  }
}
