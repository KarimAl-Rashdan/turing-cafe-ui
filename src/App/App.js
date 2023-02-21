import React, { Component } from 'react';
import './App.css';
import fetchData from "../apiCalls"
import ReservationContainer from "../Components/ReservationContainer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations : []
    }
  }
  componentDidMount =() => {
    fetchData()
    .then((response) => response.json())
    .then((data) => this.setState({reservations: data}))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
