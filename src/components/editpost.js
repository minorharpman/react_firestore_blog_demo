
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Editpost(props) {


    console.log(props.location.pathname);
    return (

        <div className="row  mt-4 mb-4 p-4 bg-warning ">

           <div className="col" >Edit post:</div> 
           <div className="col"><Link className="btn btn-primary" to={"/"} >Close</Link></div>  
        </div>


    );
};
export default Editpost;