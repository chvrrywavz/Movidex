import React from 'react';

const Movie = (props) => {
    return (
        <div className="col s12 m6 13">
            <div className="card">
                <div className="card-image waves-effect waves-light">
                    {
                        props.images == null ? <img src={'/public/assets/notFound/images.jpg'} alt="card image" style={{width: '100%', height: 360}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: '100%', height: 360}} />
                    }
                </div>
            </div>
        </div>
    )
}
export default Movie;