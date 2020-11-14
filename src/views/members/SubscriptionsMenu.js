import {Link,Route,Switch} from 'react-router-dom';
import AddSubscriptions from '../members/AddSubscriptions';
import AllSubscriptions from '../members/AllSubscriptions';
import SubscribeToNewMovie from "../members/SubscribeToNewMovie";
import EditMembers from '../members/EditMembers';
import DeleteMembers from '../members/DeleteMembers';
import Members from '../../models/SubscriptionsDB/members/membersWSModel';
import Movies from '../../models/SubscriptionsDB/movies/moviesWSModel';
import Subscriptions from '../../models/SubscriptionsDB/subscriptions/subscriptionsWSModel';
import {useState,useEffect} from 'react';
import "../../stylesheets/style.css";

const SubscriptionsMenu = (props)=>{
    const [members,setMembers]= useState([]);
    const [movies,setMovies]= useState([]);
    const [subscriptions,setSubscriptions]= useState([]);

    useEffect(()=>{
        Members.getMembersData().then(resp=>setMembers(resp.data));
        Movies.getMoviesData().then(resp=>setMovies(resp.data));
        Subscriptions.getSubscriptionsData().then(resp=>setSubscriptions(resp.data));
    },[])


    return(
       
            <div style={{marginTop:50}}>
            <ul className="Movies">
            <h3>Subscriptions</h3>
            <Link to="/main/subscriptionsMenu/allSubscriptions"><button>All Members</button></Link>
            <Link to="/main/subscriptionsMenu/addSubscriptions"><button style={{marginLeft: 5, marginRight:5}}>Add Member</button></Link>
            <Switch>
                <Route path="/main/subscriptionsMenu/allSubscriptions" render={() => <AllSubscriptions members={members} movies={movies} subscriptions={subscriptions}/>}/>
                <Route path="/main/subscriptionsMenu/addSubscriptions" component={AddSubscriptions}/>
                <Route path="/main/subscriptionsMenu/editSubscriptions/:member" render={(props) => <EditMembers memberName={props.match.params.member} members={members}/>} />
                <Route path="/main/subscriptionsMenu/deleteSubscriptions/:member" render={(props) => <DeleteMembers memberName={props.match.params.member} members={members}/>} />
                <Route path="/main/subscriptionsMenu/subscribeToNewMovie/:member" render={(props) => <SubscribeToNewMovie memberName={props.match.params.member} movies={movies} members={members}/>}/>
            </Switch>
            </ul>
        </div>
     
        
    )
}

export default SubscriptionsMenu;