import {useForm} from "react-hook-form";
import "../../stylesheets/style.css"
import "../../stylesheets/style.css";
import { Link } from 'react-router-dom';


const AllUsers = (props)=>{
    const { handleSubmit, errors } = useForm();
    const onSubmit = (data) =>{
    }
    let allUsers = props.users.map((user,index)=>{
        return  <li key={index} className="allUsers">
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <input type="text" name="memberId" hidden/>
                        First Name: <input  type="text" name="firstname" defaultValue={user.FirstName} style={{border:"none"}}/><br/>
                        Last Name: <input type="text" name="lastname" defaultValue={user.LastName} style={{border:"none"}}/><br/>
                        User Name: <input type="text" name="UserName" defaultValue={user.FirstName+user.LastName} style={{border:"none"}}/><br/>
                        Session Time Out: <input type="text"name="SessionTimeOut" defaultValue={user.SessionTimeOut} style={{border:"none" , width:50}}/><br/>
                        Created Date:<input type="text" name="CreatedDate" defaultValue={user.CreatedDate} style={{border:"none"}}/><br/>
                        {errors.name && <p>{errors.name.message}</p>}
                        Permissions:{
                        props.permissions.map((permission, i) => {
                               /*eslint-disable eqeqeq*/
                            if(permission.Id == user.Id){
                                return <ul key={i}>{ permission.Permissions.map((per,i)=>{
                                    return <li key={i}>{per}</li>;
                                })}</ul>
                            }
                            else{
                                return "";
                            }
                            })
                        }
                     <br/>
                    </form>
                    <div className="editDelBtns">
                    <Link to={`/main/usersMenu/editUsers/${user.FirstName}`}><button className="btn">Edit</button></Link>
                        <div className="deleteUserBtn">
                        <Link to={`/main/usersMenu/deleteUsers/${user.FirstName}`}><button className="btn">Delete</button></Link>
                        </div>
                    </div>
                </li>
    })

    return(
        <div>
           {allUsers}
        </div>
    )
}

export default AllUsers;