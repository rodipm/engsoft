import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import "./cadastro.css"
import "./consultaAlunos.css"
import auth from "./auth";

const url = "http://ec2-54-86-235-139.compute-1.amazonaws.com:5000/alunos";

export class ConsultaAlunos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alunos: []
        }
    }

    componentDidMount() {
        axios.get(url)
                .then(response => {console.log(response.data); this.setState({ alunos: response.data});})
                .catch(error => console.error(error));
        this.state.flag = false;
    }

    render() {

        if(!auth.isAuthenticated()){
            alert("Permissão necessária para acessar");
            window.location.href = "/";
        }

        return (
            <div>
                <Navbar />
                <form className="fundo">
                    <h2 className="titulo">Consultar Alunos</h2>
                    <table id="tabela">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Idade</th>
                                <th>Endereço</th>
                            </tr>
                            {this.state.alunos.map(aluno => {
                                return <tr key = {aluno.id}>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.CPF}</td>
                                    <td>{aluno.RG}</td>
                                    <td>{aluno.idade}</td>
                                    <td>{aluno.endereco}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    };
};