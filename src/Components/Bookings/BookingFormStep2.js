import React from 'react'
import { BookingContainer, ButtonDirections, CheckoutButton, CheckoutButtonDiv } from './BookingElements'

const BookingFormStep2 = () => {
   

    return (
        <>
        <BookingContainer>
            <h1>Payment</h1>
            <CheckoutButtonDiv>
            <CheckoutButton to='/success'>Proceed to Checkout</CheckoutButton>
            </CheckoutButtonDiv>
        </BookingContainer>
        </>
    )
}

export default BookingFormStep2
