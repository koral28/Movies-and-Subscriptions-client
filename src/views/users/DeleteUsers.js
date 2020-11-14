import "../../stylesheets/app.css";
import {useEffect} from 'react';
import Users from '../../models/Utils/users';

const DeleteUsers =(props)=>{
        
    useEffect(()=>{
       props.users.forEach(user => {
            /*eslint-disable eqeqeq*/
            if(props.userName == user.FirstName)
            {
                Users.deleteUsersData(user).then(resp=>console.log(resp.data));
            }
        });
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <div>

        </div>
    )
}
export default DeleteUsers;