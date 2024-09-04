import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import ForgotPass from './components/ForgotPass';
import Verify from './components/Verify';
import ResetPass from './components/ResetPass';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/verify/:token" element={<Verify />} />
        <Route path="/reset-password/:token" element={<ResetPass />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
