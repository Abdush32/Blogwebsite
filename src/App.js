import react from "react";
import "./App.css";
import Main from "./component/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Header from "./component/Header";
import Crousel from "./component/Crousel";
import Posts from "./component/Posts";
import Fullpost from "./component/Fullpost";
import Feed from "./component/Feed";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main}/>
        <Route path="/Signup" component={Signup }/>
        <Route path="/Signin" component={Signin }/>
        <Route path="/Header" component={Header }/>
        <Route path="/Crousel" component={Crousel }/>
        <Route path="/Posts" component={Posts}/>
        <Route path="/Fullpost/:id" component={Fullpost}/>
        <Route path="/Feed" component={Feed}/>

        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
