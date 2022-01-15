import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { Card, CardButton, CardImage, FilmCardContainer, FilmsContainer, FilmsH1 } from './FilmCardsElements';
import { AuthContext } from '../../utils/stateContext';
import Loading from '../Loading';

const baseURL = "http://localhost:5000/api/v1/films"

const Films = () => {

	// create useContext instance from stateContext.js AuthContext methods
	const auth = useContext(AuthContext)

	const [films,setFilms] = useState([]);
	const [filmtimes, setFilmTime] = useState([])
    useEffect(async () => {
		auth.loading()
        axios.get(baseURL).then((response) => {
            // const filmslist = response.data.data.data
            setFilms(response.data.data.data);
			setFilmTime(response.data.data.data[0].showtime);
			auth.notloading()
        }) 			
		.catch(err=> console.log(err));
    },[]);
	
	return (
		<FilmsContainer>
			            {auth.isAdmin && 
						<p>Admin bruh</p>
						}
			<FilmCardContainer className='films container'>
				<FilmsH1 className="text-uppercase">Films</FilmsH1>
				{auth.isLoading && <Loading/>}
				<img src={`http://localhost:5000/public/img/films/grandbudapesthotel.jpeg`}></img>
							{films.map((film, index) => {
								const {id, name, summary, startDates, imageCover} = film
								const test2 = film.startDates.map((inner) => {
									return <li key={inner} >{inner.slice(0,10)}</li>
								})
								return (
								<Card key={index} className='card mb-3'>
									<div className='row g-0'>
										<CardImage key={imageCover} className='col-md-4'>
										{imageCover}	
										</CardImage>
										<div className='col-md-8'>
											<div className="card-body" key={index}>
												<FilmsH1 className="text-uppercase" key={name}>{name}</FilmsH1>
												<p key={summary}>{summary}</p>
												<h5 style={{color: "#FFD80B", fontWeight: "bold"}}>Film Dates</h5>
												<ul key={startDates} style={{listStyleType:"circle"}}>
													{test2}
												</ul>
												<CardButton to={`/films/${film.id}`} key={id} className="text-uppercase">See more</CardButton>
											</div>	
										</div>
									</div>
								</Card>
									)
							})}
			</FilmCardContainer>
		</FilmsContainer>
	)
}

export default Films
