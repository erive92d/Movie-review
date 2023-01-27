const router = require("express").Router();

const userRoutes = require("./movieRoutes")

router.use("/movies",userRoutes)

module.exports = router;