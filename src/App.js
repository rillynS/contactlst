import React, { useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Contacts from './components/Contacts/Contacts';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      {
        <Routes>
          <Route path='/login' element={isAuth ? (<Navigate replace to="/list" />) : (<Auth setIsAuth={setIsAuth} />)}replace />
          <Route path='/list' element={isAuth ? (<Contacts />) : (<Navigate replace to="/login" />)} />
          <Route path='*' element={isAuth ? (<Navigate replace to="/list" />) : (<Navigate replace to="/login" />)} replace />
        </Routes>
      }

    </div>
  );
}

export default App;