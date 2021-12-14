export default function reducer (state, action) {
	switch(action.type) {
		case 'setFilms':{
			return {
				...state,
				films: action.data
			}
		}
		case 'addFilm': {
			return {
				...state,
				films: [action.data, ...state.films]
			}
		}
		case 'deleteFilm': {
			const updatedFilms = state.films.filter((film) => {
				return film.id !== parseInt(action.data)
			})
			return {
				...state,
				films: updatedFilms
			}
		}
		case 'updateFilm': {
			const film = state.films.find((film) => film.id == action.data.id)
			const theRest = state.films.filter((film) => film.id != action.data.id)
			const updatedFilm = Object.assign(film, action.data)
			return {
				...state,
				films: [updatedFilm, ...theRest]
			}

		}
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		default: return state
	}
}