import "../../stylesheets/subscribeSquare.css";
import 'react-dropdown/style.css';
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {subscriptionsContext} from "./context";

const SubscribeToNewMovie = (props)=>{
    const [arrayOfNotWatched] =useContext(subscriptionsContext);
    const [arrayOfWatched] =useContext(subscriptionsContext);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
       
    }
    let allSubscriptions = props.members.map((member,index)=>{
        /*eslint-disable eqeqeq*/
        return  <li key={index} className="allSubscriptions">
                    <div className="subscription" style={{height:300}}>
                        <div className="userDataSubscribe">
                            <div className="emailCityBtns">
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <button className="btn" type="submit">Subscribe To New Movie</button>
                                {props.memberName == member.Name ? (
                                     <div className="addNewMovie">
                                     Add a new movie<br/>
                                    <select style={{width:100, marginRight:5}}>
                                    {arrayOfNotWatched.map((movie,index) =>
                                    <option key={index} value={movie}>{movie}</option>
                                    )};
                                   </select>
                                     <input className="date" type="text" placeholder="date" name="date" /><br/>
                                     <Link to="/main/subscriptionsMenu/allSubscriptions"><button>Subscribe</button></Link>
                                     </div>
                                ) : (
                                    <div></div>
                                )}

                                <ul>
                                    {
                                        // arrayOfWatched.map((movie,index)=>{
                                        //     console.log(movie)
                                        // })
                                    }
                                    
                                </ul>
                        
                        </div>
                   </div>
                </li>
    })
    return(
        <div>
            <ul>
                {allSubscriptions}
            </ul>
        </div>
    )
}

export default SubscribeToNewMovie;