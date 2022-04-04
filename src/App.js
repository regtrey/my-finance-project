import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './containers/Hero';
import Partners from './containers/Partners';
import Product from './containers/Product';
import Features from './containers/Features';
import Contact from './containers/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Product />
        <Features />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
