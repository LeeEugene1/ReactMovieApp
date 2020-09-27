import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster ={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) =><MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    {/* {synopsis} */}
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}
// class Movie extends Component{

//     static propTypes = {
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired,
//         genres: propTypes.array.isRequired,
//         synopsis: propTypes.string.isRequired
//     }
//     render(){
//         console.log(this.props)
//         return(
//             <div className="Movie">
//                 <div className="Movie_Columns">
//                     <MoviePoster poster={this.props.poster} />
//                 </div>
//                 <div className="Movie_Columns">
//                     <h1>{this.props.title}</h1>
//                     <MovieGenre/>
//                     <p>{this.props.synopsis}</p>
//                 </div>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//     static propTypes = {
//         poster : propTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt="poster"/>
//         )
//     }
// }
function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    );
}

function MovieGenre({genre}){
    return(
    <span className="Movie__Genre">{genre}</span>
    );
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster:propTypes.string.isRequired
}

MovieGenre.prototype = {
    genre : propTypes.string.isRequired
}

export default Movie;