import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { BookingPage } from './BookingElements'
import BookingFormStep1 from './BookingFormStep1'
import BookingFormStep2 from './BookingFormStep2'
import data from './data'
import CartSummary from './CartSummary'


const BookingForm = () => {

    // imported ticket pricing data
    const {tickets} = data
    // initialise useState for multi page form
    const [page,setPage] = useState(0);

    const [cartItems, setCartItems] = useState([])

    const onAdd = (ticket)  => {
        // if the product exists inside cartItems
        const exist = cartItems.find(x => x.id === ticket.id);
        if(exist){
            // increase quantity of product
            // use setCartItems to update with function
            setCartItems(cartItems.map((x) => x.id === ticket.id ? {...exist, qty: exist.qty + 1} : x ))
        } else {
            // else it doesn't exist then...
            setCartItems([...cartItems, {...ticket, qty: 1}])
        }
    }

    const onRemove = (ticket) => {
        const exist = cartItems.find((x) => x.id === ticket.id);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== ticket.id));
        } else {
            // if it does exist then change qty - 1 : otherwise keep 
            setCartItems(cartItems.map((x) => x.id === ticket.id ? {...exist, qty: exist.qty - 1} : x ))
    
        }
    }

    // changes text depending on page of form
    const SpanTitles = ["Select Ticket Tier", "Payment"]

    // depending on what page form, display specific component
    const PageDisplay = () => {
        if (page === 0){
            return <BookingFormStep1 onRemove={onRemove} onAdd={onAdd} tickets={tickets} cartItems={cartItems}/>
        } else {
            return <BookingFormStep2/>
        }
    }

    return (
        <>
        <BookingPage>
            <div>
                <span>{SpanTitles[page]}</span>
            </div>
            <PageDisplay/>
            <br/>
            <CartSummary onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></CartSummary>
            <div>
            <button 
                disabled={page == 0}
                onClick={() => {setPage((currentPage) => currentPage - 1)}}>
                Previous
            </button>
            <button 
                disabled={page == SpanTitles.length-1}
                onClick={() => {setPage((currentPage) => currentPage + 1)}}>
                Next
            </button>
            </div>
        </BookingPage>
        </>
    )
}

export default BookingForm
