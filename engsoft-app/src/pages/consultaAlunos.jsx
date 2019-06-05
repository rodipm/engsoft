import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import "./cadastro.css"

const url = "http://localhost:5000/alunos";

export class ConsultaAlunos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            conteudo: [],
            flag: true
        }
    }

    render() {
        if (this.state.flag){
            axios.get(url)
                 .then(response => {console.log(response.data); this.setState({ conteudo: response.data});})
                 .catch(error => console.error(error));
            this.state.flag = false;
        }
        let rows = [];
        var resposta = this.state.conteudo;
        for (var i = 0; i < resposta.length; i++){
            var cpf, rg, endereco, nome, idade, id;
            for (var j = 0; j < 6; j++){
                id = resposta.id;
                nome = resposta.nome;
                cpf = resposta.CPF;
                rg = resposta.RG;
                idade = resposta.idade;
                endereco = resposta.endereco;
            }
            rows.push(<tr key={i}><td>{id}</td><td>{nome}</td><td>{cpf}</td><td>{rg}</td><td>{idade}</td><td>{endereco}</td></tr>);
        }
        return (
            <div>
                <Navbar />
                <form className="fundo">
                    <h2 className="titulo">Consultar Alunos</h2>
                    <table id="tabela" data={resposta}>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th>Idade</th>
                                <th>Endereço</th>
                            </tr>
                            {rows}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    };
};