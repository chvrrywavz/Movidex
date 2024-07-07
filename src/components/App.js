import React, {useEffect} from "react";
import axios from 'axios';

function App() {
    const API_KEY = "101aa8f223c7bd2a3b7caf34cc1de3e2";
    const API_URL = "https://api.themoviedb.org/3";
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
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
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5 mb-5'>Trailers</h2>
            <form className='container mb-4' onSubmit={searchMovies}>
                <input type='text' placeholder='search' onChange={(e) => setSearchKey(e.target.value)} />
                <button className="btn ">buscar</button>
            </form>

            <div className="container mt-3 text-center">
                <div className="row">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col-md-4 mb-3">
                            <img src={`${URL_IMAGE + movie.poster_path}`} alt= "" height={270} width="10%"/>
                            <h4 className='text-center'>{movie.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default App;