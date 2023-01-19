import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
  <BrowserRouter>
    <div className="wrapper">
        <Header />
        <Navbar />
        
        <div className='wrapper-content'>
        <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/dialogs*" element={<DialogsContainer />}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
