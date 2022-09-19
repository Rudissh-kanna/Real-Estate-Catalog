import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addprop from './components/Addprop';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Addprop" element={<Addprop/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
