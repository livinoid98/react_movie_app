import React from 'react';
import {Link} from "react-router-dom"
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    return(
        <Link to={{
            pathname:'/movie-detail',
            state : {
                year:year,
                title:title,
                summary:summary,
                poster:poster,
                genres:genres,
            }
        }}>
            <div class="movie">
                <img src={poster} alt=""/>
                <div class="movie_data">
                    <h3 class="movie_title">{title}</h3>
                    <h5 class="movie_year">{year}</h5>
                    <ul className="movie_genres">{genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
                    <p class="movie_summary">{summary.slice(0,180)+'...'}</p>
                </div>
            </div>
        </Link>
    );
}

export default Movie;