import React, { Component } from "react";
import "./navbar.css"

export class Navbar extends React.Component {
    render(){
        return (
            <div className="container-fluid" id="navbar">
                <div className="navbar container">
                        <a className= "item-nav" href="#">Home</a>
                        <a className= "item-nav" href="#">Registrar Vôo</a>
                        <a className= "item-nav" href="#">Consulta de horas</a>
                </div>
            </div>
        );
    };
};