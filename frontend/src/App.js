import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigation } from './ui/Nav-Footer/Navigation';
import { Home } from './ui/Pages/Home';
import { Skills } from './ui/Pages/Skills';
import { Portfolio } from './ui/Pages/Portfolio';
import { Contact } from './ui/Pages/Contact';
import { Footer } from './ui/Nav-Footer/Footer';

export const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact-me' element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
