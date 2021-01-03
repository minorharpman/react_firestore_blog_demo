import React, { useEffect}  from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import List from "./components/list";
import Editpost from "./components/editpost";

function App() {

  useEffect(() => {
    document.title = "React Js + Firestore Database Blog Demo";
  }, []);

  
  return (
    <div className="container" >

      <h1>React Js + Firestore Database Blog Demo: </h1>

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