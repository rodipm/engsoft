import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import "./login.css"
import auth from "./auth"



const url = "http://ec2-54-86-235-139.compute-1.amazonaws.com:5000/aluno";

export class Login extends React.Component {



    constructor(props) {
        super(props);
        this.state = { senha:'', CPF: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const encodedUrl = url + "?senha=" + this.state.senha + "&CPF=" + this.state.CPF;
        axios.get(encodedUrl)
            .then(response => {console.log(response.data); alert("Bem-Vindo!"); auth.login(); window.location.href = "/";})
            .catch(error => alert("Login inválido"));
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navbar />
                <form className="fundo" onSubmit={this.handleSubmit}>
                    <h2 className="titulo">Login</h2>
                    <div id="formulario" className="container">
                        <div htmlFor="cpf" className="grey-text">
                            <div className="label-form">
                                CPF
                            </div>
                            <input type="text" name="CPF" value={this.state.CPF} onChange={this.handleChange} className="form-control col-3" />
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
                        <a href="/login" target="_blank"><button type="submit" className="button-primary">Logar</button></a>
                        </div>  
                    </div>
                </form>
            </div>
        );
    };
};