import React from 'react'
import { NothingLink } from '../Nothing/NothingElements'
import { BookingH1, BookingPage } from './BookingElements'

const BookingSuccess = () => {
    return (
        <BookingPage>
            <BookingH1>Congrats!</BookingH1>
            <BookingH1>Booking successful!</BookingH1>
            <NothingLink to="/">Go home</NothingLink>
        </BookingPage>
    )
}

export default BookingSuccess
