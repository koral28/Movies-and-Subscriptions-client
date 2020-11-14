import "../../stylesheets/app.css";
import {useForm} from 'react-hook-form';
import Movies from '../../models/SubscriptionsDB/movies/moviesWSModel';



const AddMovies =(props)=>{
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) =>{
        let moviesObj = {
            Name: data.name,
            Genres: data.geners,
            Image: data.img,
            Premiered: data.premired,
          };
        
          Movies.saveMovieData(moviesObj).then(resp=>console.log(resp.data));
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
             Name: <input type="text" name="name" ref={register({required:"Name is required!",
             minLength: {value: 5 , message:"Too Short.."}})}/><br/>
             Genres: <input type="text" name="geners" ref={register}/><br/>
             {errors.name && <p>{errors.name.message}</p>}
             Image url: <input type="text" name="img" ref={register}/><br/>
             Premired: <input type="text" name="premired" ref={register}/><br/>
             <input className="btn" style={{marginLeft:10}} type="submit" value="Save"/>
             <input className="btn"  style={{marginLeft:10}} type="button" value="Cancel"/>
        </form>
        </div>
    )
}

export default AddMovies;