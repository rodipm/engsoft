import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import "./cadastro.css"

const url = "http://127.0.0.1:5000/aluno";

export class Cadastro extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: '', CPF: '', RG: '', endereco: '', idade: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name, event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(url, this.state)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navbar />
                <form className="fundo" onSubmit={this.handleSubmit}>
                    <h2 className="titulo">Matricular Aluno</h2>
                    <div id="formulario" className="container">
                        <div htmlFor="nome" className="grey-text">
                            <div className="label-form">
                                Nome
                            </div>
                            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="cpf" className="grey-text">
                            <div className="label-form">
                                CPF
                            </div>
                            <input type="text" name="CPF" value={this.state.CPF} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="rg" className="grey-text">
                            <div className="label-form">
                                RG
                            </div>
                            <input type="text" name="RG" value={this.state.RG} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="endereco" className="grey-text">
                            <div className="label-form">
                                Endereço
                            </div>
                            <input type="text" name="endereco" value={this.state.endereco} onChange={this.handleChange} className="form-control col-3" />
                        </div>
                        <br />
                        <div htmlFor="idade" className="grey-text">
                            <div className="label-form">
                                Idade
                            </div>
                            <input type="text" name="idade" value={this.state.idade} onChange={this.handleChange} className="form-control col-3" />
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