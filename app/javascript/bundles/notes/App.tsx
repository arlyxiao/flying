import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const Notes = (props) => {
  const { title } = props;
  
  return (
    <BrowserRouter>
    <div className="notes-app">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/login" element={<Login title={title} />} />
        <Route path="/register" element={<Register title={title} />} />
      </Routes>
    </div>
    </BrowserRouter>

  )
}
