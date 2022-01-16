import React from 'react'
import { BookingContainer } from './BookingElements'
import {BsPlusSquareFill} from 'react-icons/bs'

const BookingFormStep1 = ({cartItems, onRemove, tickets, onAdd}) => {

    return (
        <>
        <BookingContainer className='container'>
            {tickets.map((ticket) => (
                <div className='row' key={ticket.id} ticket={ticket}>
                    <div className='col-6'>
                        <h3>{ticket.name}</h3>
                    </div>
                    <div className='col'>{`$${ticket.price}.00`}</div>
                    <div className='col'>
                        <div>
                            <button onClick={()=>onAdd(ticket)}><BsPlusSquareFill/></button>
                        </div>
                    </div>
                </div>
            ))}
        </BookingContainer>
        </>
    )
}

export default BookingFormStep1
