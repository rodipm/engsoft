import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import "./consultaHorasVoo.css";
import axios from 'axios';

const url = "http://127.0.0.1:5000/aluno/horas_voo";


export class ConsultaHorasVoo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: '' }
        this.handleChange = this.handleChange.bind(this);
        this.consultaHoras = this.consultaHoras.bind(this);
    }


    consultaHoras(event) {
        event.preventDefault();
        axios.get(url, {nome: 'teste'})
            .then(response => console.log(response.data))
            .catch(error => alert(error));
            console.log(this.state)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return (
            <div>
                <Navbar />
                <div id="consulta">
                    <h2 className="titulo">Consultar Horas de vôo</h2>
                    <br />
                    <div>
                        <div className="grey-text label-form">Insira seu número de matrícula:</div>
                        <input name="nome" value={this.state.nome} onChange={this.handleChange} type="text" className="form-control col-3"/>
                    </div>
                    <br />
                    <div className="button">
                        <button color="unique" type="submit" className="button-primary" onClick={this.consultaHoras}>
                            Consultar
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};
