import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import List from "./components/list";
import Editpost from "./components/editpost";

function App() {
  return (
    <div >

      <Router>


        <Switch>

        
        <Route exact path='/' component={List} ></Route>
        <Route exact path='/editpost/:id' component={Editpost}></Route>

        </Switch>
               


       </Router>

    </div >
  );
}

export default App;