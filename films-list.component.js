import react from "React";
import { Link } from "react-router-dom";
import axios from "axios";

const Film = (props) => (
  <tr>
    <td>{props.film.film_description}</td>
    <td>{props.film.film_responsible}</td>
    <td>{props.film.film_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

const constructor = (props) => {
  super(props);
  this.state = { films: [] };
};

const componentDidMount = () => {
  axios
    .get("http://localhost:3000/films/")
    .then((response) => {
      this.setState({ films: response.data });
    })
    .catch((err) => {
      console.log(error);
    });
};

const filmList = () => {
  return this.state.films.map((currentFilms, i) => {
    return <Films film={currentTodo} key={i} />;
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log(`Form submitted: `);
  console.log(`Film Description: ${this.state.film_description}`);
  console.log(`Film Responsible: ${this.state.film_responsible}`);
  console.log(`Film Priority: ${this.state.film_priority}`);
  const newFilm = {
    film_description: this.state.film_description,
    film_responsible: this.state.film_responsible,
    film_priority: this.state.film_priority,
    film_completed: this.state.film_completed,
  };
  axios.post("http://localhost:3000/film/add/", newFilm).then((res) => {
    console.log(res.data);
  });
  this.setState({
    film_description: "",
    film_responsible: "",
    film_priority: "",
    film_completed: false,
  });
};

render = () => {
  return (
    <div>
      <h3>Films List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.filmList()}</tbody>
      </table>
    </div>
  );
};
