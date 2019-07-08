import React from "react";
import axios from 'axios';
import "./cadastroAeronave.css"
import auth from "./auth";

const url = "http://localhost:5000/aeronave";

export class CadastroAeronave extends React.Component {

    constructor(props) {
        super(props);
        this.state = { identificacao: '', modelo:'', status: 'Em Manutencao'}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.props.updateNome(this.state.identificacao);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(url, this.state)
            .then(response => this.props.handleSubmitPostCallback(response.data))
            .catch(error => console.error(error));
    }

    render() {

        if(!auth.isAuthenticated()){
            alert("Permissão necessária para acessar");
            window.location.href = "/";
        }

        return (
            <div>
                <form className="fundo" onSubmit={this.handleSubmit}>
                    <h2 className="titulo">Registrar Aeronave</h2>
                    <div id="formulario" className="container">
                        <div htmlFor="identificacao" className="grey-text">
                            <div className="label-form">
                                Identificação
                            </div>
                            <input type="text" name="identificacao" value={this.state.identificacao} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="modelo" className="grey-text">
                            <div className="label-form">
                                Modelo
                            </div>
                            <input type="text" name="modelo" value={this.state.modelo} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="status" className="grey-text">
                            <div className="label-form">
                                Status
                            </div>
                            <select name="status" value={this.state.status} onChange={this.handleChange} className="form-control col-3">
                                <option value="Em Manutencao">Em manutenção</option>
                                <option value="Operacional">Operacional</option>
                            </select>
                        </div>
                        <br />
                        <div class="button">
                            <a href="/consultaAeronaves" target="_blank"><button type="submit" className="button-primary" onclick="alert(); ">Registrar</button></a>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};