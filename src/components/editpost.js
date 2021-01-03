
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Editpost(props) {

    const { params } = props.match;
   // console.log(props.location.pathname);
    console.log(params.id);
    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning ">

           <div className="col" >Edit post:</div> 
           <div className="col" >ID:{params.id}</div> 
           <div className="col"><Link className="btn btn-primary" to={"/"} >Close</Link></div>  
        </div>


    );
};
export default Editpost;