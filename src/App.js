import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News pageSize={6} country={'in'} category={'general'}/>}> </Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}

