import React, { Component } from "react";
import auth from "./auth";



export class Backdoor extends React.Component {

    render() {
        auth.login();
        alert("Logado com sucesso");
        window.location.href = "/";
        
        return(
            <div>

            </div>
        );
    };
};