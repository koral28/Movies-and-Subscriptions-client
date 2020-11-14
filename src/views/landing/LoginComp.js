import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../../stylesheets/app.css";
import Login from "../../models/Utils/login";


const LoginComp =(props)=>{
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) =>{
        Login.login(data.username,data.password).then(resp=>{
           if(resp.data.success)
           {
               props.history.push("/main")
           }
           else{
            props.history.push("/")
           }
        });
    }
    return(
        <div>
            <h1>Movies - Subscriptions Web Site</h1>
            <h3>Log in Page</h3>
           <form onSubmit={handleSubmit(onSubmit)}>
            User name: <input type="text" name="username" ref={register({required:"Name is required!",
            minLength: {value: 5 , message:"Too Short.."}})}/><br/>
            Password: <input type="text" name="password"  ref={register({required:"Password is required!",
            minLength: {value: 4 , message:"Too Short.."}})}/><br/>
           {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" value="Login"/><br/>
            New User? <Link to="/createAccount" type="submit">Create Account</Link>
        </form>
        </div>
    )
}

export default LoginComp;