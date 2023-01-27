const router = require("express").Router();

const Movie = require("../../models/Movie");

//GET ALL MOVIES

router.get("/", (req, res) => {
  Movie.findAll().then((movies) => {
    res.json(movies);
  });
});

//GET ONE MOVIE
router.get("/:id", async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id);
    if (!movieData) {
      res.status(404).json({ message: "No movie with this id!" });
      return;
    }

    res.status(200).json(movieData);
  } catch {
    res.status(500).json({ message: "Error" });
  }
});

router.post("/", async (req, res) => {
    console.log(req.body)
    const movieData = await  Movie.create({
        title: req.body.title,
        director: req.body.director,
        release: req.body.release,
        review: req.body.review,
      })
    
      res.status(200).json(movieData)
});

module.exports = router;
