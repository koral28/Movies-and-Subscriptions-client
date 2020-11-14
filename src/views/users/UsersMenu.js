import {Link,Route,Switch} from 'react-router-dom';
import "../../stylesheets/style.css"
import AddUsers from './AddUsers';
import AllUsers from './AllUsers';
import EditUsers from './EditUsers';
import DeleteUsers from './DeleteUsers';
import { useState,useEffect } from "react";
import Users from "../../models/Utils/users";
import Permissions from "../../models/Utils/permissions";


const UsersMenu = (props)=>{
    const [users,setUsers]= useState([]);
    const [permissions,setPermissions]= useState([]);

    useEffect(()=>{
        Users.getUsersData().then(resp=>setUsers(resp.data.users));
        Permissions.getPermissionsData().then(resp=>setPermissions(resp.data.permissions));
    },[])


    return(
        <div>
            <div style={{marginTop:50}}>
            <ul className="Movies">
            <h3>Users</h3>
            <Link to="/main/usersMenu/allUsers"><button>All Users</button></Link> 
            <Link to="/main/usersMenu/addUsers"><button style={{marginLeft: 5, marginRight:5}}>Add User</button></Link>
            <Switch>
                <Route path="/main/usersMenu/allUsers" render={() => <AllUsers users={users} permissions={permissions} />}/>
                <Route path="/main/usersMenu/addUsers" component={AddUsers}/>
                <Route path="/main/usersMenu/editUsers/:user" render={(props) => <EditUsers firstName={props.match.params.user} users={users}/>} />
                <Route path="/main/usersMenu/deleteUsers/:user" render={(props) => <DeleteUsers userName={props.match.params.user} users={users}/>} />
            </Switch>
            </ul>
        </div>
        </div>
    )
}

export default UsersMenu;