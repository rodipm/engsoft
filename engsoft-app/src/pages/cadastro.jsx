import React from "react";
import { Navbar } from "../components/navbar";
import { NotificacaoCadastro } from "../components/notificacaoCadastro";
import { CadastroFormulario } from "./cadastroFornulario";
import { CadastroConfirmacao } from "./cadastroConfirmacao";

import "./cadastro.css"
import auth from "./auth";

export class Cadastro extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: '' , cadastrado: false,  modalShow: false, id: null}
        this.handleSubmitPostCallback = this.handleSubmitPostCallback.bind(this);
        this.updateNome = this.updateNome.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }

    handleSubmitPostCallback(response) {
            this.setState({ cadastrado: true, modalShow: true, id: response.id});
    }

    updateNome(novoNome) {
        this.setState({nome: novoNome})
    }

    modalClose() {
        this.setState({ modalShow: false });
    }


    render() {

        let pagina;
        

        if(!auth.isAuthenticated()){
            alert("Permissão necessária para acessar");
            window.location.href = "/";
        }
        
        pagina = <CadastroFormulario handleSubmitPostCallback={this.handleSubmitPostCallback} updateNome={this.updateNome} />

        return (
            <div>
                <Navbar />
                {pagina}          
                <NotificacaoCadastro
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                    onClose={this.modalShow}
                    id={this.state.id}
                    nome={this.state.nome} 
                /> 
            </div>
        );
        
        
        
            
    };
};