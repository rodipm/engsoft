import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import "./homepage.css"

export class Homepage extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="container " id="homepage">
                    <h1 id="welcome">Bem-vindo ao Aeroclube Butantã, sócix!</h1>
                    <div className="container row cards">
                        <div className="card-homepage col-6">
                            <div className="vertical-center">
                                <p className="texto-homepage">Acabou de fazer um vôo? Registre-o agora:</p>
                                <a href="/registroVoo" target="_blank"><button type="button" className="button-primary" onclick="alert(); " >Registro de Vôo</button></a>
                            </div>
                        </div>
                        <div className="card-homepage col-6">
                            <div className="vertical-center">
                                <p className="texto-homepage">Veja quantas horas de vôo você <br/> já completou:</p>
                                <a href="/consultaHorasVoo"><button type="button" className="button-primary" onclick="window.location.href = '/';">Consulta de Horas</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};