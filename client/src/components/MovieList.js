import React from 'react'
import noImage from "../img/no-image.png"

function MovieList({ movies }) {

    const imgPoster = (movie) => (
        movie.Poster === "N/A"
            ? noImage
            : movie.Poster
    )
    
    const truncateTitle = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
    }

    return (
        <div className="container">
            <div className="row">
                {
                    movies.map((movie, i) => (
                        <div className="col-lg-4 col-md-6 " key={i}>
                            <div className="card mb-4 shadow-sm ">
                                <img src={imgPoster(movie)} style={{ Height: "auto" }} className="card-img-top p-img" alt=".." />
                                <div className="card-body">
                                    <p className="card-title">
                                        Title : <span className="text-danger">{truncateTitle(movie.Title, 35)}</span></p>
                                    <p className="card-text">
                                        Year : <span className="text-primary">{movie.Year}</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default MovieList
