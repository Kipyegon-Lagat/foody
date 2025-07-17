import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props);
        //console.log("parent constructor");
    }
    // componentDidMount(){
    //     console.log("parent componentDidMount");
    // }
    // componentDidUpdate(){
    //     console.log("parent componentDidUpdate");
    // }
    // componentWillUnmount(){
    //     console.log("parent componentWillUnmount");
    // }
    render(){
        //console.log("parent render");
        return(
            <div className="user-card flex flex-col justify-center items-center">
                <h1 className="font-bold m-2 p-2">ABOUT ME</h1>
                <ProfileClass />
            </div>
        )
    }
}
export default About;

/*
-parent constructor
-parent render

    -1st child constructor
    -1st child render

    -2nd child constructor
    -2nd child render
     
    --DOM updation in single batch
    -1st child componentDidMount
    -2nd child componentDidMount

-parent componentDidMount
 */

