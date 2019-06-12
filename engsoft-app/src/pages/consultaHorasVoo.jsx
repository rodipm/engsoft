import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import "./cadastro.css"

const url = "http://127.0.0.1:5000/aluno/horas_voo";

export class ConsultaHorasVoo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { aluno_id: '' , nome: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ aluno_id: event.target.value });
        console.log(event.target.name, event.target.value)
    }


    handleSubmit(event) {
        event.preventDefault();
        axios.post(url, this.state)
            .then(response => {console.log(response.data); alert("Horas: " + response.data.horas_voo); if(response.data.horas_voo >= 40){alert("Emissão de brevê possível")};})
            .catch(error => console.error(error));
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <Navbar />
                <form className="fundo" onSubmit={this.handleSubmit}>
                    <h2 className="titulo">Consultar Horas de Voo do Aluno</h2>
                    <div id="consulta" className="container">
                        <div htmlFor="aluno_id" className="grey-text">
                            <div className="label-form">
                                Matricula
                            </div>
                            <input type="text" name="aluno_id" value={this.state.aluno_id} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div class="button">
                        <a href="/consultaHorasVoo" target="_blank"><button type="submit" className="button-primary">Consultar</button></a>
                        </div>  
                    </div>
                </form>
            </div>
        );
    };
};