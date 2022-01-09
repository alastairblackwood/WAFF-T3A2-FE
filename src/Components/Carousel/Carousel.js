import React, { useEffect, useState } from 'react'
import { CarouselButton, CarouselCell, CarouselContainer, CarouselInner, SwiperX } from './CarouselElements';
import axios from 'axios';
import { BsFillArrowLeftSquareFill, BsArrowRightSquareFill  } from "react-icons/bs";

const baseURL = "http://localhost:5000/api/v1/films"


const Carousel = () => {

    const [films,setFilms] = useState(null);
    const [index,setIndex] = useState(0);


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            // const filmslist = response.data.data.data
            setFilms(response.data.data.data);
        });
    },[]);
    console.log(films)
    if (!films) return null;

    return (
        <>
        <CarouselContainer id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <CarouselInner className="carousel-inner">
  {films.map((film) => {
            const {id, images, name} = film;
            console.log(films[0])
            // more stuff coming up
            return <CarouselCell key={id} className={films[0] === film ? "carousel-item active" : "carousel-item"} >
                <img src={images[0]} className="d-block w-100" alt={name}/>
                <CarouselButton className="btn">Times and Tickets</CarouselButton>
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
        {/* <section className='section'>
            <carouselContainer>
            {films.map((film,filmIndex) => {
            const {id, images, name} = film;
            // more stuff coming up
            return <carouselCell key={id}>
                <img src={images[0]} alt={name}></img>
            </carouselCell>
            })}

            <button className='prev'>
                <BsFillArrowLeftSquareFill/>
            </button>
            <button className='next'>
                <BsArrowRightSquareFill/>
            </button>
            </carouselContainer>

        </section> */}
        {/* <!-- Slider main container --> */}

        </>
    )
}

export default Carousel
