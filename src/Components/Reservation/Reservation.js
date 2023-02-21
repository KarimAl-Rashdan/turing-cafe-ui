import React from "react"
import "./Reservation.css"

const Reservation = ({id, name, date, time, number}) => {
  return (
    <div className="card">
      <header>{name}</header>
      <p className="dateTag">{date}</p>
      <p className="timeTag">{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Reservation