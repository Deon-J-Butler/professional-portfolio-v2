import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigation } from "./ui/Nav-Footer/Navigation";
import { Home } from "./ui/Pages/Home";
import { Skills } from "./ui/Pages/Skills";
import { Portfolio } from "./ui/Pages/Portfolio";
import { Contact } from "./ui/Pages/Contact";
import { Footer } from "./ui/Nav-Footer/Footer";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact-me" component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
