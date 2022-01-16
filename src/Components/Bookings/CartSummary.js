import React from 'react'
import { BookingContainer } from './BookingElements'

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
                <div key={item.id} className='row'>
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={()=>onAdd(item)}>+</button>
                    <button 
                    disabled={cartItems.length === 0}
                    onClick={()=>onRemove(item)}>-</button>
                </div>
                <div className='col-2 text-right'>
                    {item.qty} x {item.price}
                </div>
                </div>
            ))}
            {/* if its greater than 0 then render */}
            {cartItems.length !== 0 && (
                <>
                <hr/>
                <div className='row'>
                    <div className='col-2'>Total Price</div>
                    <div className='col-1 text-right'>{`${totalPrice}`}</div>
                </div>
                </>
            )
            }
            </div>
        </BookingContainer>
    )
}

export default CartSummary
