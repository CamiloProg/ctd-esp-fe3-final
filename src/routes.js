// AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favs" element={<Favs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dentist/:id" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;
