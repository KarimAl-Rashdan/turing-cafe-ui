import React from "react"

const Reservation = ({id, name, date, time, number}) => {
  return (
    <div className="card">
      <header>{name}</header>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Reservation