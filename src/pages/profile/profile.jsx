import React, { useContext, useEffect, useState} from 'react';
import { useFind } from '../../utils';
import UserProfile from './userprofile';
import { DataContext } from '../../utils';
import jwtDecode from 'jwt-decode';

function Profile() {
    const token = localStorage.getItem("token");
    const username = jwtDecode(token).username;
    const dataContext = useContext(DataContext);
    const [user,setUser]= useState(null);

    const { response, find } = useFind(
        `${dataContext.API}/user/${username}`
      );
    useEffect(() => {
        console.log("ff")
        find({headers: {
            Authorization:
              token
              
          }});
    },[] );

    useEffect(() => {
        if (response?.data){
            setUser(response.data)
        }
    },[response] );
    
  return (
    <div>
       <UserProfile user={user} />
    </div>
  );
}

export default Profile;