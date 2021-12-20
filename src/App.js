import react from "react";
import "./App.css";
import Main from "./component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Header from "./component/Header";
import Crousel from "./component/Crousel";
import Posts from "./component/Posts";
import Fullpost from "./component/Fullpost";
import Feed from "./component/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Crousel" element={<Crousel />}></Route>
        <Route path="/Posts" element={<Posts />}></Route>
        <Route path="/Fullpost" element={<Fullpost />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
