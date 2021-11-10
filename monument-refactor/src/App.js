import React from 'react';
import './App.css';
import './Header.css'
import Nav from './Nav.js';
import Landing from './Landing';
import Blog from './Blog'
import Header from './Header.js';
import Articles from './Articles.js';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div>
      Welcome to React Monument
      <Nav />
      <Landing />
      {<Header />}
      <Articles />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
