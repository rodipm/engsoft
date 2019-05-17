import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RegistroVoo } from './pages/registroVoo';
import {Cadastro} from './pages/cadastro';

class App extends Component {
  render(){
      return (
        <div className="App">
          <Cadastro />
          
        </div>
      );
    }
  }


export default App;