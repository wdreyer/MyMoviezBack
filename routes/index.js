var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;

router.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=851b5521381925c280f834619ed8c453`)
 .then(response => response.json())
 .then(data => {
  console.log(data)
   res.json({ movies: data.results });
 });
});

module.exports = router;
