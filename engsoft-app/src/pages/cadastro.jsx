import React from "react";
import { Navbar } from "../components/navbar";
import { CadastroFormulario } from "./cadastroFornulario";
import { CadastroConfirmacao } from "./cadastroConfirmacao";

import "./cadastro.css"

export class Cadastro extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: '' , cadastrado: false }
        this.handleSubmitPostCallback = this.handleSubmitPostCallback.bind(this);
        this.updateNome = this.updateNome.bind(this);
    }

    handleSubmitPostCallback() {
            this.setState({ cadastrado: true });
    }

    updateNome(novoNome) {
        this.setState({nome: novoNome})
    }

    render() {
        let pagina;
        if (this.state.cadastrado)
            pagina = <CadastroConfirmacao nome={this.state.nome} />
        else
            pagina = <CadastroFormulario handleSubmitPostCallback={this.handleSubmitPostCallback} updateNome={this.updateNome} />

        return (
            <div>
                <Navbar />
                {pagina}
            </div>
        );
    };
};