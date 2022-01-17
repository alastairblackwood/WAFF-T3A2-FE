import React from 'react'
import { BookingContainer, BookingSummaryBody, PlusMinus, PlusMinusContainer } from './BookingElements'
import {AiFillMinusCircle} from "react-icons/ai"
import {BsFillPlusSquareFill} from "react-icons/bs"

const CartSummary = ({cartItems, onAdd, onRemove}) => {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)

    return (
        <BookingContainer>
            <h1>Booking Summary</h1>
            <div>
            {cartItems.length === 0 && 
            <div>You need to add tickets!</div>
            }
            {cartItems.map((item) => (
                <BookingSummaryBody key={item.id} className='row'>
                <div className='col-2'><h4>{item.name}</h4></div>
                <PlusMinusContainer className='col-2'>
                    <PlusMinus 
                    disabled={cartItems.length === 0}
                    onClick={()=>onRemove(item)}><AiFillMinusCircle/></PlusMinus>
                    <PlusMinus onClick={()=>onAdd(item)}><BsFillPlusSquareFill/></PlusMinus>
                </PlusMinusContainer>
                <div className='col-2 text-right'>
                    {item.qty} x {`$${item.price}`}
                </div>
                </BookingSummaryBody>
            ))}
            {/* if its greater than 0 then render */}
            {cartItems.length !== 0 && (
                <>
                <hr/>
                <div className='row'>
                    <div className='col-2'>Total Price</div>
                    <div className='col-1 text-right'>{`$${totalPrice}`}</div>
                </div>
                </>
            )
            }
            </div>
        </BookingContainer>
    )
}

export default CartSummary
