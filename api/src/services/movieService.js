const axios = require("axios")

const getMovies = (keyword, page) => {
    return axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${keyword}&page=${page}`)
}

const mergeMovies = async (keyword) => {
    const page1 = await getMovies(keyword, 1)
    if (page1.data.Response === "True") {
        if (page1.data.totalResults > 10) {
            const page2 = await getMovies(keyword, 2)
            const result = page1.data.Search.concat(page2.data.Search)
            return result;
        }
        return page1.data.Search;
    }
    return [];
}

module.exports = mergeMovies;