import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './containers/Contact';
import Post from './containers/Post';
import About from './containers/About';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/about" component={About} />

        <Footer />
      </div>
    </Router>
   
  );
}

export default App;
