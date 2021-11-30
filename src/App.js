import react from "react";
import "./App.css";
import Main from "./component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./component/Signup";
import Signin from "./component/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
