import React from'react';
import {Route,Switch} from 'react-router-dom';
import LoginComp from "./LoginComp";
import CreateAccountComp from "./CreateAccountComp";
import MainComp from "./MainComp";

const Login = (props) =>{
    return(
        <div>
            <Switch>
                <Route path="/login" component={LoginComp}/>
                <Route path="/createAccount" component={CreateAccountComp}/>
                <Route path="/main" component={MainComp}/>
            </Switch>
        </div>
    )
}

export default Login;