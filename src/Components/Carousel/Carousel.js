import React, { useEffect, useState, useContext } from 'react'
import { CarouselButton, CarouselCell, CarouselContainer, CarouselInner, CarouselLoader, SwiperX } from './CarouselElements';
import axios from 'axios';
import { BsFillArrowLeftSquareFill, BsArrowRightSquareFill  } from "react-icons/bs";
import { AuthContext } from '../../utils/stateContext';
import Loading from '../Loading';

const baseURL = "http://localhost:5000/api/v1/films"
const herokuURL = `https://wesandersonfilmfestival.herokuapp.com/api/v1/films`


const Carousel = () => {

    const [films,setFilms] = useState(null);
    const [index,setIndex] = useState(0);
	const auth = useContext(AuthContext)


    useEffect(() => {
        auth.loading()
        axios.get(herokuURL).then((response) => {
            // const filmslist = response.data.data.data
            setFilms(response.data.data.data);
            auth.notloading()
        });
    },[]);
    console.log(films)
    if (!films) 
    return null;

    return (
        <>
        <CarouselLoader>
        {auth.isLoading && <Loading/>}
        </CarouselLoader>
        <CarouselContainer id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <CarouselInner className="carousel-inner">
  {films.map((film) => {
            const {id, imageCover, name} = film;
            // more stuff coming up
            return <CarouselCell key={id} className={films[0] === film ? "carousel-item active" : "carousel-item"} >
                <img src={`${herokuURL}/${id}/${imageCover}`} className="d-block w-100" alt={name}/>
                <CarouselButton to={`films/${film.id}`} className="btn">Times and Tickets</CarouselButton>
            </CarouselCell>
            })}
  </CarouselInner>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</CarouselContainer>
        </>
    )
}

export default Carousel
