import "../../stylesheets/app.css";
import {useEffect} from 'react';
import Members from '../../models/SubscriptionsDB/members/membersWSModel';

const DeleteMembers =(props)=>{
        
    useEffect(()=>{
       props.members.forEach(member => {
            /*eslint-disable eqeqeq*/
            if(props.memberName == member.Name)
            {
                Members.deleteMembersData(member.Name).then(resp=>console.log(resp.data));
            }
        });
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <div>

        </div>
    )
}
export default DeleteMembers;