import "../../stylesheets/app.css";
import {useForm} from 'react-hook-form';
import {useEffect,useState} from 'react';
import Members from '../../models/SubscriptionsDB/members/membersWSModel';

const EditMembers =(props)=>{
    const { register, handleSubmit, errors } = useForm();
    const [email,setEmail]= useState("");
    const [city,setCity]= useState("");

        
    useEffect(()=>{
        props.members.forEach(member => {
            /*eslint-disable eqeqeq*/
            if(props.memberName == member.Name)
            {
                setEmail(member.Email);
                setCity(member.City);
            }
        });
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit = (data) =>{
        let memberObj = {
            name: data.name,
            email: data.email,
            city: data.city,
          };
          Members.updateMembersData(memberObj).then(resp=>console.log(resp.data));
    }
    return(
        <div>
            <b>Edit Member: {props.memberName}</b>
            <form onSubmit={handleSubmit(onSubmit)}>
             Name: <input type="text" name="name" defaultValue={props.memberName} ref={register({required:"Name is required!",
             minLength: {value: 5 , message:"Too Short.."}})}/><br/>
             Email: <input type="text" name="email" defaultValue={email} ref={register}/><br/>
             {errors.name && <p>{errors.name.message}</p>}
             City: <input type="text" name="city" defaultValue={city} ref={register}/><br/>
             <button style={{marginLeft: 5}}>Update</button>
            <button style={{marginLeft: 5}}>Cancel</button>
        </form>
        </div>
    )
}

export default EditMembers;