import "../../";
import { Link } from 'react-router-dom';
import {useState} from 'react';

const AllMovies = (props)=>{
    const [movieFound,setMovie]= useState("");
    const [findIsOn,setFindIsOn]= useState("");

    const findMovie=(e)=>{
        setMovie(e.target.value)
    }
    const find=()=>{
        setFindIsOn(true);
    }

    let allMovies = props.movies.map((movie,index)=>{
        if(findIsOn && movie.Name.includes(movieFound))
        {
            return  <li key={index} className="allMovies">
            {movie.Name}, {movie.Premiered.slice(0,4)}<br/>
            Geners: 
            {movie.Genres.map(gener=>gener+',')}
            <div style={{float:'left', textAlign:'left'}}>
            <img src ={movie.Image} alt="" style={{height:100, float:"left", marginTop:2}}/>
            <div className="SubscriptionsWatched" style={{marginTop:-100, height:94}}>
            Subscriptions Watched:
            {
            props.subscriptions.map((subscription,index) => {
                return <ul className="ulStyle" key={index}>
                        {
                            props.members.map((member,index) => {
                            /*eslint-disable eqeqeq*/
                            if (movie._id == subscription.Movie.movieId &&subscription.MemberId == member._id){
                                return <li style={{display: "list-item"}} key={index}><Link to="">{member.Name}</Link>,{subscription.Movie.date.slice(0,10)}</li>;
                            }
                            else{
                                return ""
                            }
                            })
                        }             
                        </ul>
            })
            }
            </div>
            </div>
            <div style={{marginTop:5, float:"left"}}>
            <Link to={`/main/moviesMenu/editMovies/${movie.Name}`}><button className="btn">Edit</button></Link>
            <Link to=""><button className="btn">Delete</button></Link>
            </div>
            </li>
        }
        else if(!findIsOn)
        {
            return  <li key={index} className="allMovies">
                {movie.Name}, {movie.Premiered.slice(0,4)}<br/>
                Geners: 
                {movie.Genres.map(gener=>gener+',')}
                <div style={{float:'left', textAlign:'left'}}>
                    <img src ={movie.Image} alt="" style={{height:100, float:"left", marginTop:2}}/>
                    <div className="SubscriptionsWatched" style={{marginTop:-100, height:94}}>
                    Subscriptions Watched:
                        {
                            props.subscriptions.map((subscription,index) => {
                                return <ul className="ulStyle" key={index}>
                                    {
                                          props.members.map((member,index) => {
                                            /*eslint-disable eqeqeq*/
                                            if (movie._id == subscription.Movie.movieId &&subscription.MemberId == member._id){
                                                 return <li style={{display: "list-item"}} key={index}><Link to="">{member.Name}</Link>,{subscription.Movie.date.slice(0,10)}</li>;
                                            }
                                            else{
                                                return ""
                                            }
                                        })
                                    }             
                                </ul>
                            })
                        }
                    </div>
                    </div>
                    <div style={{marginTop:5, float:"left"}}>
                        <Link to={`/main/moviesMenu/editMovies/${movie.Name}`}><button className="btn">Edit</button></Link>
                        <Link to={`/main/moviesMenu/deleteMovies/${movie.Name}`}><button className="btn">Delete</button></Link>
                    </div>
        </li>
        }
        else{
            return "";
        }
    })

    return(
        <div style={{}}>
            Find Movie: <input type="text" onChange={findMovie}/>
            <button style={{marginLeft: 5}} onClick={find}>Find</button>
            <ul>
               {allMovies}
            </ul>
        </div>
    )
}

export default AllMovies;