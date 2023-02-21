import React from "react"
import Reservation from "../Reservation/Reservation"
import "./ReservationContainer.css"

const ReservationContainer = ({reservations}) => {
  const reservationsAtRestaurant = reservations.map(booking => {
    return (
      <Reservation
        id={booking.id}
        key={booking.id}
        name={booking.name}
        date={booking.date}
        time={booking.time}
        number={booking.number}
      />
    )
  })
  return (
    <div className="reservationContainer">
      {reservationsAtRestaurant}
    </div>
  )
}

export default ReservationContainer