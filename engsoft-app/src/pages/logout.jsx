import React, { Component } from "react";
import auth from "./auth";



export class Logout extends React.Component {

    render() {
        auth.logout();
        alert("Deslogado com sucesso ->" + auth.isAuthenticated());
        window.location.href = "/";
        
        return(
            <div>

            </div>
        );
    };
};