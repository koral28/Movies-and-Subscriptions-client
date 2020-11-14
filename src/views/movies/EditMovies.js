import "../../stylesheets/app.css";
import {useForm} from 'react-hook-form';
import {useEffect,useState} from 'react';
import Movies from '../../models/SubscriptionsDB/movies/moviesWSModel';

const EditMovies =(props)=>{
    const { register, handleSubmit, errors } = useForm();
    const [movieGeners,setMovieGeners]= useState("");
    const [movieImage,setMovieImage]= useState("");
    const [moviePremired,setMoviePremired]= useState("");

        
    useEffect(()=>{
        props.movies.forEach(movie => {
            /*eslint-disable eqeqeq*/
            if(props.movieName == movie.Name)
            {
                setMovieGeners(movie.Genres);
                setMovieImage(movie.Image);
                setMoviePremired(movie.Premiered);
            }
        });
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit = (data) =>{
        let moviesObj = {
            Name: data.name,
            Genres: data.geners,
            Image: data.img,
            Premiered: data.premired,
          };
          Movies.updateMoviesData(moviesObj).then(resp=>console.log(resp.data));
    }
    return(
        <div>
            <b>Edit Movie: {props.movieName}</b>
            <form onSubmit={handleSubmit(onSubmit)}>
             Name: <input type="text" name="name" defaultValue={props.movieName} ref={register({required:"Name is required!",
             minLength: {value: 5 , message:"Too Short.."}})}/><br/>
             Genres: <input type="text" name="geners" defaultValue={movieGeners} ref={register}/><br/>
             {errors.name && <p>{errors.name.message}</p>}
             Image url: <input type="text" name="img" defaultValue={movieImage} ref={register}/><br/>
             Premired: <input type="text" name="premired" defaultValue={moviePremired} ref={register}/><br/>
             <input className="btn" style={{marginLeft:5}} type="submit" value="Update"/>
             <input className="btn" style={{marginLeft:5}} type="button" value="Cancel"/>
        </form>
        </div>
    )
}

export default EditMovies;