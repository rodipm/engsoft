import React, { Component } from "react";
import { setRole, getRole } from "./tokenHolder";



export class Logout extends React.Component {

   

    render() {
        setRole(0);
        alert("Deslogado com sucesso ->" + getRole());
        window.location.href = "/";
        
        return(
            <div>

            </div>
        );
    };
};