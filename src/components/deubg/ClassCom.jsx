import axios from 'axios'
import React, { Component } from 'react'

export default class ClassCom extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons.username)
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.username}</li>
            )
        }
      </ul>
    )
  }
}
