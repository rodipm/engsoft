import React from "react";
import axios from 'axios';
import "./loginFormulario.css"

const url = "http://127.0.0.1:5000/aluno";

export class LoginFormulario extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: '', senha: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.props.updateId(this.state.id);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(url, this.state)
            .then(response => this.props.handleSubmitPostCallback())
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <form className="fundo" onSubmit={this.handleSubmit}>
                    <h2 className="titulo">Matricular Aluno</h2>
                    <div id="formulario" className="container">
                        <div htmlFor="id" className="grey-text">
                            <div className="label-form">
                                Matricula
                            </div>
                            <input type="text" name="id" value={this.state.id} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="senha" className="grey-text">
                            <div className="label-form">
                                Senha
                            </div>
                            <input type="text" name="senha" value={this.state.senha} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div class="button">
                            <a href="/registroVoo" target="_blank"><button type="submit" className="button-primary" onclick="alert(); ">Matricular</button></a>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};