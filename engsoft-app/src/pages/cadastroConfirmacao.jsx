import React from "react";

import "./cadastroConfirmacao.css"

export class CadastroConfirmacao extends React.Component {
    render() {
        return (
            <div className="container " id="cadastro-sucesso">
                <div className="container row cards">
                    <div className="card-cadastro-sucesso col-6">
                        <div className="vertical-center">
<<<<<<< HEAD
                            <p className="texto-cadastro-sucesso">Usuario {this.props.nome} cadastrado com sucesso!</p>
=======
                            <p className="texto-cadastro-sucesso">Usuario {this.props.nome} Cadastrado com sucesso!</p>
>>>>>>> master
                            <a href="/" ><button type="button" className="button-primary">Home</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
