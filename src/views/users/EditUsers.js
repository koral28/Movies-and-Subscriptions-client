import "../../stylesheets/style.css"
import {useForm} from 'react-hook-form';
import {useEffect,useState} from 'react';
import Users from "../../models/Utils/users";

const EditUsers = (props)=>{
    const {handleSubmit,register } = useForm();
    const [userLastName,setUserLastName]= useState("");
    const [userName,setUserName]= useState("");
    const [sessionTimeOut,setSessionTimeOut]= useState("");
    // const [viewSubscriptions,setViewSubscriptions]= useState("");
    const [userId,setUserId]= useState("");


    useEffect(()=>{
        props.users.forEach(user => {
            /*eslint-disable eqeqeq*/
            if(props.firstName == user.FirstName)
            {
                setUserId(user.Id);
                setUserLastName(user.LastName);
                setUserName(user.FirstName+" "+user.LastName);
                setSessionTimeOut(user.SessionTimeOut);
                // setViewSubscriptions(user.ViewSubscriptions);
            }
        });
    },[])// eslint-disable-line react-hooks/exhaustive-deps



    const onSubmit = (data) =>{
        let userObj = {
            UserId: userId,
            FirstName: data.FirstName,
            LastName: data.LastName,
            SeesionTimeOut: data.SeesionTimeOut,
            ViewSubscriptions: data.ViewSubscriptions,
            CreateSubscriptions: data.CreateSubscriptions,
            DeleteSubscriptions: data.DeleteSubscriptions,
            UpdateSubscription: data.UpdateSubscription,
            ViewMovies: data.ViewMovies,
            CreateMovies: data.CreateMovies,
            DeleteMovies: data.DeleteMovies,
            UpdateMovies: data.UpdateMovies,
          };
        
          Users.updateUsersData(userObj).then(resp=>console.log(resp.data));
    }

    return(
        <div>
        <b>Edit User: {userName}</b>
        <form onSubmit={handleSubmit(onSubmit)}>
             First Name: <input type="text" name="FirstName"  defaultValue={props.firstName} ref={register({required:"Name is required!",
             minLength: {value: 2 , message:"Too Short.."}})}/><br/>
             Last Name: <input type="text"name="LastName"   defaultValue={userLastName} ref={register({required:"Name is required!",
             minLength: {value: 2 , message:"Too Short.."}})}/><br/>
             User Name: <input type="text"  name="UserName"  defaultValue={userName}  ref={register({required:"Name is required!",
             minLength: {value: 2 , message:"Too Short.."}})}/><br/>
             Session Time Out: <input type="text" name="SeesionTimeOut" defaultValue={sessionTimeOut}  ref={register()}/><br/>
             permissions:<br/>
             View Subscriptions  <input type="checkbox"  name="ViewSubscriptions" ref={register()} /><br/>
             Create Subscriptions  <input type="checkbox"  name="CreateSubscriptions" ref={register()}  /><br/>
             Delete Subscriptions  <input type="checkbox" name="DeleteSubscriptions" ref={register()}/><br/>
             Update Subscription <input type="checkbox"  name="UpdateSubscription" ref={register()}/><br/>
             View Movies <input type="checkbox"  name="ViewMovies" ref={register()}/><br/>
             Create Movies  <input type="checkbox" name="CreateMovies" ref={register()}/><br/>
             Delete Movies <input type="checkbox" name="DeleteMovies" ref={register()}/><br/>
             Update Movie  <input type="checkbox" name="UpdateMovies" ref={register()}/><br/>
             <input className="btn" style={{marginLeft:10}} type="submit" value="Update"/>
            <a className="btn" href="/users">Cancel</a><br />
    </form>
    </div>
    )
}

export default EditUsers;