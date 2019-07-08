import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import "./cadastro.css"

const url = "http://localhost:5000/aeronave";

export class AlterarStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = { identificacao: '' , modelo: '', status: 'Em Manutencao'}
        this.statusChange = this.statusChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ identificacao: event.target.value });
    }

    statusChange(event) {
        this.setState({ status: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.put(url, this.state)
            .then(response => {console.log(response.data);})
            .catch(error => console.error(error));
    }


    render() {
        return (
            <div>
                <Navbar />
                <form className="fundo" onSubmit={this.handleSubmit}>
                    <h2 className="titulo">Alterar Status da Aeronave</h2>
                    <div id="consulta" className="container">
                        <br />
                        <div className="texto-nMatricula">
                            Identificação da Aeronave
                        </div>
                        <input type="text" name="identificacao" onChange={this.handleChange} className="form-control col-3"/>
                        <br />
                        <select name="status" value={this.state.status} onChange={this.statusChange} className="form-control col-3">
                            <option value="Em Manutencao">Em manutenção</option>
                            <option value="Operacional">Operacional</option>
                        </select>
                        <br />
                        <div class="button">
                        <a href="/consultaHorasVoo" target="_blank"><button type="submit" className="button-primary">Alterar</button></a>
                        </div>  
                    </div>
                </form>
            </div>
        );
    };
};