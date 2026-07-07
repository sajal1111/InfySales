

import { useState } from 'react';
import TopBar from './components/routing/topbar/TopBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/routing/home/Home";
import Signup from './components/routing/signup/Signup';
import Login from "./components/routing/login/Login"

function App() {
  const [isLoggedIn,setStatus]=useState(false);
  
  function doUpdateStatus(status)
  {
      setStatus(status);
  }
  return (
    <>

    <BrowserRouter>
    <TopBar isLoggedIn={isLoggedIn} doUpdateStatus={doUpdateStatus}></TopBar>   
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<Home></Home>}></Route>

      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
