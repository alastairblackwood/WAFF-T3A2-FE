import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../utils/stateContext';
import { Outlet } from 'react-router-dom'
import { FilmsContainer } from './FilmCardsElements'

const FilmLayout = () => {
    const auth = useContext(AuthContext)

    return (
        <FilmsContainer>
            <Outlet  context={[films, setFilms]}/>
        </FilmsContainer>
    )
}

export default FilmLayout
