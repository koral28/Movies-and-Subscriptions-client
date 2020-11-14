import {Link,Route,Switch} from 'react-router-dom';
import "../../stylesheets/app.css";
import MoviesMenu from "../movies/MoviesMenu";
import SubscriptionsMenu from "../members/SubscriptionsMenu";
import UsersMenu from "../users/UsersMenu";


const MainComp =(props)=>{
    return(
        <div>
            <h1>Movies - Subscriptions Web Site</h1>
            <Link to="/main/moviesMenu"><button>Movies</button></Link>
            <Link to="/main/subscriptionsMenu"><button style={{marginLeft: 10}}>Subscriptions</button></Link>
            <Link to="/main/UsersMenu"><button style={{marginLeft: 10}}>Users Management</button></Link>
            <Link to="/login"><button style={{marginLeft: 10}}>Log Out</button></Link>

            <Switch>
                <Route path="/main/moviesMenu" component={MoviesMenu}/>
                <Route path="/main/subscriptionsMenu" component={SubscriptionsMenu}/>
                <Route path="/main/UsersMenu" component={UsersMenu}/>
            </Switch>
        </div>
    )
}
export default MainComp;
