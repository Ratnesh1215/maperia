// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateLocation from './pages/CreateLocation';
import ShowLocation from './pages/ShowLocation';
import EditLocation from './pages/EditLocation';
import DeleteLocation from './pages/Deletelocation';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Locations from './pages/Loc';
import ContactUs from './components/ContactUs'; // Adjusted import path

function App() {
  return (
    <div style={{ background: 'black', overflow: 'hidden' }}>
      <Navbar />
      <div className="container mx-full p-4">
        <Routes>
          <Route path='/locations/home' element={<Home />} />
          <Route path='/locations/create' element={<CreateLocation />} />
          <Route path='/locations/details/:id' element={<ShowLocation />} />
          <Route path='/locations/edit/:id' element={<EditLocation />} />
          <Route path='/locations/delete/:id' element={<DeleteLocation />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/contactus' element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
