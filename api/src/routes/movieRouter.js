const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const { verifyCache, cache } = require("../middlewares/verifyCache")
const mergeMovies = require("../services/movieService")

router.get("/api/search", verifyCache, async (req, res) => {
    const keyword = req.query.keyword;
    const movies = await mergeMovies(keyword)
    cache.set(keyword, movies);
    res.status(httpStatus.OK).send(movies)
})

router.get("/api/clear", (req, res) => {
    cache.flushAll();
    res.send({ message: "clear all cache" })
})

module.exports = router;