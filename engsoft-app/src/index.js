import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { RegistroVoo } from "./pages/registroVoo";
import { RegistroVooConfirmaAluno } from "./pages/registroVoo_confirmaAluno";
import { RegistroVooInsereDados } from "./pages/registroVoo_insereDados";
import { Cadastro } from "./pages/cadastro";
import { Homepage } from "./pages/homepage";
import { ConsultaHorasVoo } from "./pages/consultaHorasVoo";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/registroVoo" component={RegistroVoo} />
      <Route path="/registroVooConfirma" component={RegistroVooConfirmaAluno} />
      <Route path="/registroVooDados" component={RegistroVooInsereDados} />
      <Route path="/consultaHorasVoo" component={ConsultaHorasVoo} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
