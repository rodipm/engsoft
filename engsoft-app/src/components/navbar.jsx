import React, { Component } from "react";
import "./navbar.css";
import birdIcon from '../img/bird.svg';
import {  getRole } from "../pages/tokenHolder";

export class Navbar extends React.Component {
    render(){
        alert("ROLE : "+ getRole());
        if( getRole() == 0){
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
                        <a className= "item-nav" href="/logout">Logout</a>
                </div>
            </div>
        );
    };
};