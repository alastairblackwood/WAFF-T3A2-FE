import React from 'react'
import { NothingContainer, NothingH1, NothingLink } from './NothingElements'

const Nothing = () => {
    return (
        <NothingContainer>
            <NothingH1 className='text-uppercase'>There's nothing here!</NothingH1 >
            <NothingLink to="/">Go home</NothingLink>
        </NothingContainer>
    )
}

export default Nothing
