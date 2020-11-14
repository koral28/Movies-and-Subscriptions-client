import "../../stylesheets/app.css";
import {useEffect} from 'react';
import Movies from '../../models/SubscriptionsDB/movies/moviesWSModel';

const DeleteMovies =(props)=>{
        
    useEffect(()=>{
       props.movies.forEach(movie => {
            /*eslint-disable eqeqeq*/
            if(props.movieName == movie.Name)
            {
                Movies.deleteMoviesData(movie.Name).then(resp=>console.log(resp.data));
            }
        });
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <div>

        </div>
    )
}
export default DeleteMovies;