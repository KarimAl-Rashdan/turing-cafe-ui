import React, { Component } from 'react';
import './App.css';
import fetchData from "../apiCalls"
import ReservationContainer from "../Components/ReservationContainer/ReservationContainer"
import Form from "../Components/Form/Form.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations : []
    }
  }
  componentDidMount =() => {
    fetchData()
    .then((data) => this.setState({reservations: data}))
  }
  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
