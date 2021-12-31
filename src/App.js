import react from "react";
import "./App.css";
import Main from "./component/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Header from "./component/Header";
import Crousel from "./component/Crousel";
import Posts from "./component/Posts";
import Feed from "./component/Feed";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import getCategory from "./component/getCategory";
import Singlepost from "./component/Singlepost";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Signin" exact component={Signin} />
        <Route path="/Header" exact component={Header} />
        <Route path="/Crousel" exact component={Crousel} />
        <Route path="/Posts" exact component={Posts} />
        <Route path="/getCategory/:id" exact component={getCategory} />
        <Route path="/SinglePost/:id" exact component={Singlepost} />
        <Route path="/Feed" exact component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
