import React from "react";
import { Navbar } from "../components/navbar";
import { LoginFormulario } from "./loginFormulario";

import "./cadastro.css"

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: '' , logged: false }
        this.handleSubmitPostCallback = this.handleSubmitPostCallback.bind(this);
        this.updateId = this.updateId.bind(this);
    }

    handleSubmitPostCallback() {
            this.setState({ logged: true });
    }

    updateId(novoId) {
        this.setState({id: novoId})
    }

    render() {
        let pagina;
        if (this.state.logged)
            pagina = <Homepage nome={this.state.nome} />
        else
            pagina = <LoginFormulario handleSubmitPostCallback={this.handleSubmitPostCallback} updateId={this.updateId} />

        return (
            <div>
                <Navbar />
                {pagina}
            </div>
        );
    };
};