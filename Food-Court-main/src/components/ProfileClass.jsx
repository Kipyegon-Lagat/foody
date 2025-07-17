import React from 'react';
import { GITHUB_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
       // console.log("child constructor");
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
                avatar_url:"http://dummyphoto"
            }
        };
    }
    async componentDidMount(){
        //console.log("child componentDidMount");
        const data= await fetch(GITHUB_API);
        const json=await  data.json();
        this.setState({userInfo:json});
        //console.log(json);
    }
    componentDidUpdate(){
        //if we don't clear interval then in componentWillUnmount
        //then it will keep running even when we mount other components
        // because this is a single page application which will affect performance

        // this.timer=setInterval(()=>{
        //     console.log("timer is running");
        // },1000)
        
        //console.log("child componentDidUpdate");

    }
    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("timer cleared")
        //console.log("child componentWillUnmount");
    }
    render(){
        //console.log("child render");
        const{name,location,twitter_username,avatar_url}=this.state.userInfo;
        return(
            <div className='border rounded-lg h-[fit-content] w-[fit-content]'>
                <div className=' font-semibold p-2 m-2 flex'>
                    LoggedInUser :-
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <img src={avatar_url} alt="User avatar" 
                className=" flex items-center justify-center avatar-user scale-80 m-2 p-2 max-h-60 max-w-60 rounded-3xl "/>
                <h2 className=' font-semibold p-2 m-2'>Name 🐱‍👤: {name}</h2>
                <h3 className=' font-semibold p-2 m-2'>Location 🗺: {location}</h3>
                <h3 className=' font-semibold p-2 m-2'>Contact at ✖: @<Link to={"https://x.com/"+twitter_username}>{twitter_username} </Link></h3>
            </div>
        )
    }
}

export default ProfileClass;


/*
    #Mounting cycle
        -constructor dummy
        -render dummy
        -<HTML dummy>
    #ComponentDidMount
        -<API Call>
        -<this.setState> ->state variable updated

    #Updating cycle
        -render (API data)
        -<HTML> (API DATA)
        componentDidUpdate
        

*/