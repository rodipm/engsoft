import React, { Component } from "react";
import "./navbar.css";
import birdIcon from '../img/bird.svg';
import auth from "../pages/auth";


export class Navbar extends React.Component {
    render(){
        if(!auth.isAuthenticated()){
            return (
                <div className="container-fluid" id="navbar">
                    <div className="navbar container">
                            <a className= "item-nav" href="/">Início</a>
                            <a className= "item-nav" href="/consultaHorasVoo">Consulta de horas</a>
                            <a className= "item-nav" href="/login">Login</a>
                    </div>
                </div>
            );
        }

        return (
            <div className="container-fluid" id="navbar">
                <div className="navbar container">
                        <a className= "item-nav" href="/">Início</a>
                        <a className= "item-nav" href="/cadastro">Cadastro</a>
                        <a className= "item-nav" href="/registroVoo">Registrar Voo</a>
                        <a className= "item-nav" href="/consultaHorasVoo">Consulta de horas</a>
                        <a className= "item-nav" href="/consultaAlunos">Consultar Alunos</a>
                        <a className= "item-nav" href="/registro">Cadastrar Aeronave</a>
                        <a className= "item-nav" href="/alterarStatus">Alterar Status da Aeronave</a>
                        <a className= "item-nav" href="/consultaAeronaves">Consultar Aeronaves</a>
                        <a className= "item-nav" href="/logout">Logout</a>
                </div>
            </div>
        );
    };
};