import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import "./homepage.css"
import planeIcon from '../img/airplane.svg';
import calendarIcon from '../img/wall-calendar.svg';
import birdIcon from '../img/bird.svg';
import {  setRole, getRole } from "./tokenHolder";

export class Homepage extends React.Component {
    render(){
        
        return (
            <div>
                <Navbar />
                <div className="container " id="homepage">
                    <div className="bem-vindo">
                        <img src={birdIcon} alt="logo" className="logo"/>
                        <h1 id="welcome">Bem-vindo ao <b>Aeroclube Butantã</b>, sócix!</h1>
                    </div>
                    <div className="container row cards">
                        <div className="card-homepage col-6">
                            <div className="vertical-center">
                                <img src={planeIcon} alt="icone-aviao" className="icon-home"/>
                                <p className="texto-homepage">Acabou de fazer um vôo? <b>Registre-o</b> agora:</p>
                                <a href="/registroVoo" ><button type="button" className="button-primary" onclick="alert(); " >Registro de Vôo</button></a>
                            </div>
                        </div>
                        <div className="card-homepage col-6">
                            <div className="vertical-center">
                            <img src={calendarIcon} alt="icone-calendario" className="icon-home"/>
                                <p className="texto-homepage">Veja quantas <b>horas de vôo</b> você <br/> já completou:</p>
                                <a href="/consultaHorasVoo"><button type="button" className="button-primary" onclick="window.location.href = '/';">Consulta de Horas</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};