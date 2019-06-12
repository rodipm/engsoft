import React from "react";

import "./cadastroConfirmacao.css"
import auth from "./auth";

export class CadastroConfirmacao extends React.Component {
    render() {
        if(!auth.isAuthenticated()){
            alert("Permissão necessária para acessar");
            window.location.href = "/";
        }
        return (
            <div className="container " id="cadastro-sucesso">
                <div className="container row cards">
                    <div className="card-cadastro-sucesso col-6">
                        <div className="vertical-center">
                            <p className="texto-cadastro-sucesso">Usuario {this.props.nome} Cadastrado com sucesso!</p>
                            <a href="/" ><button type="button" className="button-primary">Home</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
