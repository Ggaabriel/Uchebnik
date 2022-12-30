import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';


const App = (props) => {
  return (<BrowserRouter>

    <div className="wrapper">
        <Header />
        <Navbar />
        
        <div className='wrapper-content'>
        <Routes>
            <Route path="/profile" element={<Profile 
            ProfilePage= { props.state.ProfilePage} 
            dispatch = {props.dispatch}

            />}/>
            <Route path="/dialogs*" element={<Dialogs state= { props.state.DialogsPage}/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
