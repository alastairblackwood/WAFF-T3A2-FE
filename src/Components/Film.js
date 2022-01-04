import React from 'react'
import {Line, COLOUR1, COLOUR2} from './Styled'

export default function Film({film,index}) {
	if (!film) return null
	function isOdd(num) {
		return num % 2 === 1
	}
	return (
		<Line colour={isOdd(index) ? COLOUR1 : COLOUR2}>
			{film.body}	
		</Line>
	)
}