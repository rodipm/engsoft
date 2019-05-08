import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RegistroVoo } from './pages/registroVoo';

class App extends Component {
  render(){
      return (
        <div className="App">
          <RegistroVoo />
        </div>
      );
    }
  }

export default App;