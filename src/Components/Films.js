import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Film from './Film'
import {useGlobalState} from '../utils/stateContext'

const StyledLink = styled(Link) `
	text-decoration: none;
`
export default function Films() {
	const {store} = useGlobalState()
	const {films} = store
	if(!films) return null

	return  (
		<div>
			{films.map((film,index) => {
				return (
					<StyledLink key={film.id} to={`/films/${film.id}`}>
						<Film index={index} film={film} />
					</StyledLink>
				)
			})}
		</div>
	)
}