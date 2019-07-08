import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "../components/navbar";
import "./cadastro.css"
import "./consultaAeronaves.css"
import auth from "./auth";

const url = "http://localhost:5000/aeronaves";

export class ConsultarAeronaves extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aeronaves: []
        }
    }

    componentDidMount() {
        axios.get(url)
                .then(response => {console.log(response.data); this.setState({ aeronaves: response.data});})
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
                    <h2 className="titulo">Consultar Aeronaves</h2>
                    <table id="tabela">
                        <tbody>
                            <tr>
                                <th>Identificação</th>
                                <th>Modelo</th>
                                <th>Status</th>
                            </tr>
                            {this.state.aeronaves.map(aeronave => {
                                return <tr key = {aeronave.identificacao}>
                                    <td>{aeronave.identificacao}</td>
                                    <td>{aeronave.modelo}</td>
                                    <td>{aeronave.status}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    };
};