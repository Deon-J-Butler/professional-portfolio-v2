import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navigation } from './ui/Nav-Footer/Navigation';
import { Home } from './ui/Pages/Home/Home';
import { Skills } from './ui/Pages/Skills/Skills';
import { Portfolio } from './ui/Pages/Portfolio/Portfolio';
import { ContactForm } from './ui/Pages/Contact/Contact';
import { Footer } from './ui/Nav-Footer/Footer';
import "./ui/CSS/UI.css";

export const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact-me' element={<ContactForm />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
