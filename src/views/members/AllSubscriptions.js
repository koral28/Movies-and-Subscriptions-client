import "../../stylesheets/style.css"
import {useForm} from 'react-hook-form';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import {subscriptionsContext} from "./context";

const AllSubscriptions = (props)=>{
    const [arrayOfNotWatched,setArrayOfNotWatched] =useContext(subscriptionsContext);
    const [arrayOfWatched,setArrayOfWatched] =useContext(subscriptionsContext);

    const { register } = useForm();

    const subscribe = (memberId) =>{
        props.movies.forEach((movie) => {
            let flag = false;
            props.subscriptions.forEach((subscription) => {
                  /*eslint-disable eqeqeq*/
              if (subscription.MemberId == memberId) {
                  if (movie._id == subscription.Movie.movieId) {
                    flag = true;
                  }
                  else{
                    setArrayOfWatched(arrayOfWatched => [...arrayOfWatched, movie.Name]);
                }
              }
            });
            if (!flag) {
                setArrayOfNotWatched(arrayOfNotWatched => [...arrayOfNotWatched, movie.Name]);
            }
          });

          console.log(arrayOfWatched)
    }
    let allSubscriptions = props.members.map((member,index)=>{
        return  <li key={index} className="allSubscriptions">
                    <div className="subscription" style={{height:300}}>
                        <div className="userDataSubscribe">
                            <div className="emailCityBtns">
                            <form >
                                <input type="text" style={{border:"none"}} hidden name="id" defaultValue={member._id} ref={register}/><br/>
                                <input type="text" style={{border:"none"}} name="name" defaultValue={member.Name} ref={register}/><br/>
                                Email: <input type="text" style={{border:"none"}} name="username" defaultValue={member.Email} ref={register}/><br/>
                                City: <input type="text" style={{border:"none"}} name="password" defaultValue={member.City} ref={register}/><br/>
                                <Link to={`/main/subscriptionsMenu/editSubscriptions/${member.Name}`}><button className="btn">Edit</button></Link>
                                <Link to={`/main/subscriptionsMenu/deleteMovies/${member.Name}`}><button className="btn">Delete</button></Link>
                            </form>
                            </div>
                        </div><br/>
                        <div className="SubscriptionsWatched" style={{ border: '3px solid rgba(1, 1, 1, 1)', marginTop:10, marginRight:47 }}>
                        <b>Movies Watched</b><br/><br/>
                        <Link to={`/main/subscriptionsMenu/subscribeToNewMovie/${member.Name}`}><button className="btn" type="button" onClick={()=>subscribe(member._id)}>Subscribe To New Movie</button></Link>
                        </div>
                   </div>
                </li>
    })
    return(
        <div>
            <ul>
                {allSubscriptions}
               
            </ul>
           <ul>
           </ul>
        </div>
    )
}

export default AllSubscriptions;