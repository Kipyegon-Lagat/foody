import React, { useEffect ,useState} from 'react'
import { GITHUB_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(()=>{
      //api call
      getUserDetails();
      const timer=setTimeout(()=>{
        console.log('hello');
      });
      return ()=>{
        clearTimeout(timer);
        console.log('useEffect return');
      };
  
  },[]);
  async function getUserDetails(){
    const response = await fetch(GITHUB_API);
    const data = await response.json();
    setUserInfo(data);
  }
  const{name,location,twitter_username,avatar_url}=userInfo;
        return(
            <div>
                <img src={avatar_url} alt="User avatar" className="avatar-user"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact at X: @<Link to={"https://x.com/"+twitter_username}>{twitter_username} </Link></h3>
            </div>
        )
    
}

export default Profile;