import filmAPI from "../config/api";

const films = [ {
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b1dc796928ce0ee495eeb3",
    "rating": 4.7,
    "name": "The Grand Budapest Hotel",
    "price": 497,
    "durationWeeks": null,
    "id": "61b1dc796928ce0ee495eeb3"
},
{
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b1df95d7f4660f99eb8fbe",
    "rating": 4.7,
    "name": "Moonrise Kingdom",
    "price": 497,
    "durationWeeks": null,
    "id": "61b1df95d7f4660f99eb8fbe"
},
{
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b65b770f8163c560a9041d",
    "name": "The Royal Tenenbaums",
    "price": 10,
    "rating": 4.5,
    "durationWeeks": null,
    "id": "61b65b770f8163c560a9041d"
},
{
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b65c080f8163c560a9041e",
    "name": "The Darjeeling Limited",
    "price": 10,
    "rating": 4.9,
    "durationWeeks": null,
    "id": "61b65c080f8163c560a9041e"
},
{
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b65c460f8163c560a9041f",
    "name": "Fantastic Mr. Fox",
    "price": 10,
    "rating": 4.7,
    "durationWeeks": null,
    "id": "61b65c460f8163c560a9041f"
},
{
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b65c8e0f8163c560a90420",
    "name": "The Life Aquatic",
    "price": 10,
    "rating": 4.6,
    "durationWeeks": null,
    "id": "61b65c8e0f8163c560a90420"
},
{
    "ratingsAverage": 4.5,
    "ratingsQuantity": 0,
    "images": [],
    "startDates": [],
    "secretFilm": false,
    "_id": "61b65ccd0f8163c560a90421",
    "name": "Rushmore",
    "price": 10,
    "rating": "4.6",
    "durationWeeks": null,
    "id": "61b65ccd0f8163c560a90421"
}]


export async function getFilm(id) {
    // then replace films with filmAPI
    const film = films.find(film => film.id == id)
    return film
}

export async function createFilm(film) {
	return film
}

export async function deleteFilm(id) {
	console.log("deleted")
	return id
}

export async function updateFilm(film) {
	return film
	
}

export async function getFilms(){
    const response = await filmAPI.get('/')
    console.log(response)
    return response.data
}

// export async function getFilm(id){
//     const response = await filmAPI.get(`/api/films/${id}`)
//     return response.data
// }