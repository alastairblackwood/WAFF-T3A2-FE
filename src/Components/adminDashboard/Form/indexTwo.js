// const express = require("express");
// const mongoose = require("mongoose");
// const { default: ListFilm } = require("../ListFilm/ListFilm");
// const app = express();

// const ListFilmModel = require("./models/filmModel ");

// app.use(express.json());

// app.get("/", async (req, res) => {
//   const filmName = req.body.filmName;
//   const year = req.body.year;
//   const duration = req.body.duration;
//   const price = req.body.price;
//   const summary = req.body.summary;
//   const description = req.body.description;

//   const film = new ListFilmModel({
//     filmName: filmName,
//     year: year,
//     duration: duration,
//     price: price,
//     summary: summary,
//     description: description,
//   });

//   try {
//     await film.save();
//     res.send("inserted data");
//   } catch (err) {
//     console.log(err);
//   }
// });
