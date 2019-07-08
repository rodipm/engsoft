import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {RegistroVoo} from './pages/registroVoo';
import {RegistroVooConfirma} from './pages/registroVoo_confirmaAluno';
import {RegistroVooDados} from './pages/registroVoo_insereDados';
import {Cadastro} from './pages/cadastro';
import {CadastroFormulario} from './pages/cadastroFornulario';
import {CadastroConfirmacao} from './pages/cadastroConfirmacao';
import {Homepage} from './pages/homepage';
import {ConsultaHorasVoo} from './pages/consultaHorasVoo';
import * as serviceWorker from './serviceWorker';
import { Login } from './pages/login';
import { Logout } from './pages/logout';
import { Backdoor } from './pages/backdoor';
import { ConsultaAlunos } from './pages/consultaAlunos'
import { CadastroAeronave } from './pages/cadastroAeronave'
import { ConsultarAeronaves } from './pages/consultaAeronaves';
import { Registro } from './pages/registro';
import { AlterarStatus } from './pages/alterarStatus';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/backdoor" component={Backdoor} />
      <Route path="/cadastroFormulario" component={CadastroFormulario} />
      <Route path="/cadastroConfirmacao" component={CadastroConfirmacao} />
      <Route path="/registroVoo" component={RegistroVoo} />
      <Route path="/registroVooConfirma" component={RegistroVooConfirma} />
      <Route path="/registroVooDados" component={RegistroVooDados} />
      <Route path="/consultaHorasVoo" component={ConsultaHorasVoo} />
      <Route path="/consultaAlunos" component={ConsultaAlunos} />
      <Route path="/cadastraAeronave" component={CadastroAeronave} />
      <Route path="/consultaAeronaves" component={ConsultarAeronaves} />
      <Route path="/registro" component={Registro} />
      <Route path="/alterarStatus" component={AlterarStatus} />
    </div>
  </Router>
  
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
