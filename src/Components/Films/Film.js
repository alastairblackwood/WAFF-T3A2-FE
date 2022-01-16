import React, {useState, useContext, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { FilmBody, FilmPageContainer, FilmContainer, FilmImageContainer, FilmH1, FilmSmallText, FilmTimesContainer } from './FilmElements';
import { AuthContext } from '../../utils/stateContext';
import axios from 'axios';
import Loading from '../Loading';


const Film = () => {

	let params = useParams();
	const baseURL = `http://localhost:5000/api/v1/films/${params.id}`
	// create useContext instance from stateContext.js AuthContext methods
	const auth = useContext(AuthContext)
	// useState initialising

	const [film,setFilm] = useState([]);

	// useEffect to get film data
	useEffect(async () => {
		auth.loading()
		axios.get(baseURL).then((response) => {
			setFilm(response.data.data.data);
			auth.notloading()
		}) 			
		.catch(err=> console.log(err));
	},[]);

		console.log(film)
	
	if(!film){
		return null;
    }


	return (
		
		<FilmPageContainer>
			{auth.isLoading && <Loading/>}
			<div className=''>
				<FilmContainer className='row'>
					<FilmImageContainer className='col-md-3'>
						<img src={`${baseURL}/${film.imageCover}`}/>
					</FilmImageContainer>
					<div className='col-md-9'>
						<FilmH1 className="text-uppercase">{film.name}</FilmH1>
						<div className='d-flex gap-3'>
							<FilmSmallText >Released in: {film.year}</FilmSmallText>
							<FilmSmallText>Runtime: {film.duration} hours</FilmSmallText>
						</div>
						<FilmBody>{film.description}</FilmBody>
					</div>
				</FilmContainer>
			</div>

		<FilmTimesContainer>
			
		</FilmTimesContainer>

		</FilmPageContainer>
	)
}

export default Film
