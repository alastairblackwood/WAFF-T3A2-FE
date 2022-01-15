import React, {useState, useContext, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { FilmContainer } from './FilmElements';
import { AuthContext } from '../../utils/stateContext';
import axios from 'axios';

const baseURL = "http://localhost:5000/api/v1/films"

const Film = () => {

	let params = useParams();

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

	
	if(!film){
		return null;
    }


	return (
		
		<FilmContainer>
		film
		<h1>Title: {params.id}</h1>	
		<h1>name:{params.name}</h1>
			<div className=''>
				<div className='row'>
					<div className='col-md-3'>
						imageCover
					</div>
					<div className='col-md-9'>
						<h1>title</h1>
						<p>release date</p>
						<p>summary</p>
			
					</div>
				</div>
			</div>

		</FilmContainer>
	)
}

export default Film
