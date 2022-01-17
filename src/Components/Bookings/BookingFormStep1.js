import React from 'react'
import { BookingContainer, PlusMinus } from './BookingElements'
import {BsPlusCircleFill} from 'react-icons/bs'

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
                            <PlusMinus style={{color: "#FFD80B"}} onClick={()=>onAdd(ticket)}><BsPlusCircleFill/></ PlusMinus>
                        </div>
                    </div>
                </div>
            ))}
        </BookingContainer>
        </>
    )
}

export default BookingFormStep1
