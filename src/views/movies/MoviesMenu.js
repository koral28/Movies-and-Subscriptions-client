import {Link,Route,Switch} from 'react-router-dom';
import AddMovies from '../movies/AddMovies';
import AllMovies from '../movies/AllMovies';
import EditMovies from '../movies/EditMovies';
import DeleteMovies from '../movies/DeleteMovies';
import Movies from '../../models/SubscriptionsDB/movies/moviesWSModel';
import Members from '../../models/SubscriptionsDB/members/membersWSModel';
import Subscriptions from '../../models/SubscriptionsDB/subscriptions/subscriptionsWSModel';
import "../../stylesheets/style.css"
import React,{useEffect, useState} from 'react';


const MoviesMenu = (props)=>{
    
    const [movies,setMovies]= useState([]);
    const [members,setMembers]= useState([]);
    const [subscriptions,setSubscriptions]= useState([]);
    
    useEffect(()=>{
        Movies.getMoviesData().then(resp=>setMovies(resp.data));
        Members.getMembersData().then(resp=>setMembers(resp.data));
        Subscriptions.getSubscriptionsData().then(resp=>setSubscriptions(resp.data));
    },[])

    return(
        <div>
            <div style={{marginTop:50}}>
            <ul className="Movies">
            <h3>Movies</h3>
            <Link to="/main/moviesMenu/allMovies"><button>All Movies</button></Link>
            <Link to="/main/moviesMenu/addMovies"><button style={{marginLeft: 5, marginRight:5}}>Add Movie</button></Link>
            <Switch>
                <Route path="/main/moviesMenu/allMovies" render={() => <AllMovies subscriptions={subscriptions} members={members} movies={movies}/>} />
                <Route path="/main/moviesMenu/addMovies" component={AddMovies}/>
                <Route path="/main/moviesMenu/editMovies/:movie" render={(props) => <EditMovies movieName={props.match.params.movie} movies={movies}/>} />
                <Route path="/main/moviesMenu/deleteMovies/:movie" render={(props) => <DeleteMovies movieName={props.match.params.movie} movies={movies}/>} />
            </Switch>
            </ul>
        </div>
        </div>
    )
}

export default MoviesMenu;