import React from 'react';
import logo from './logo.svg';
import './App.css';
import react from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from './component/auth/login';
import Registration from './component/auth/registration';
import Forgetpassword from './component/auth/forget-password';
import Profile from './component/pages/profile';
import Dashboard from './component/pages/dashboard';
import Sidebar from './component/pages/sidebar';
function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Routes>
        
        <Route path="/" Component={Login} />
        <Route path="/registration" Component={Registration} />
        <Route path="/forget-password" Component={Forgetpassword} />
        <Route path="/profile" Component={Profile} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </div>
  );
}

export default App;
