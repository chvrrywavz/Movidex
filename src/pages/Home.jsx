import React, {useEffect} from 'react'
import {TextField} from "@mui/material";
import './others/Style.css';
import axios from "axios";



export default function Home() {

    const API_KEY = "101aa8f223c7bd2a3b7caf34cc1de3e2";
    const API_URL = "https://api.themoviedb.org/3";
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

    const [movies, setMovies] = React.useState([]);
    const [searchKey, setSearchKey] = React.useState('');
    const [movie, setMovie] = React.useState({ title: "cargando pelis"});

    const fetchMovies = async (searchKey) => {

        const type = searchKey ? 'search' : 'discover';

        const {data: {results},
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });
        setMovies(results);
        setMovie(results[0]);
    }

    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey)
    }

    useEffect(() => {
        fetchMovies();
    },[])

    return (
        <div id="home">
            <figure id="logo">
                <img src="assets/logo/movidexLogo.png" alt="Movidex Logo" width="150" height="150" />
            </figure>
            <div id="searcher">
                <TextField id="filledSearch"
                           label="Buscar"
                           variant="filled"
                           fullWidth={true}
                           color="secondary"/>
            </div>
            <div id="titleBox">
                <h3 id="title">Bienvenido a</h3>
                <h2 id="title2">Movidex</h2>
            </div>
            <div  id="gallery">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img src={`${URL_IMAGE + movie.poster_path}`} alt= "" height={200} width={150}/>
            </div>
            ))}
            </div>
        </div>
    );
}