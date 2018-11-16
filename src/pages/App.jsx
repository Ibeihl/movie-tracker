import React, { Component } from 'react';
import '../css/app.css'
import { Route } from 'react-router-dom';
import Search from './Search';
import Saved from './Saved';
import Navbar from '../components/navbar';

class App extends Component {
  render() {
    return (
      <div >
          <Navbar/>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
      </div>
    );
  }
}

export default App;
