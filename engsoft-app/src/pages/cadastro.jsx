import React, { Component } from "react";
import "./cadastro.css"

export class Cadastro extends React.Component {
    render(){
        return (
            <form className="fundo">
                <h2 className="titulo">Matricular Aluno</h2>
                <div htmlFor="nome" className="grey-text">
                    <div className="texto-nome">
                        Nome
                    </div>
                <input type="text" className="form-control"/>
                </div>
                <br />
                <div htmlFor="cpf" className="grey-text">
                    <div className="texto-cpf">
                        CPF
                    </div>
                <input type="text" className="form-control"/>
                </div>
                <br />
                <div htmlFor="rg" className="grey-text">
                    <div className="texto-rg">
                        RG
                    </div>
                <input type="text" className="form-control"/>
                </div>
                <br />
                <div htmlFor="endereco" className="grey-text">
                    <div className="texto-endereco">
                        Endereço
                    </div>
                <input type="text" className="form-control"/>
                </div>
                <br />
                <div htmlFor="idade" className="grey-text">
                    <div className="texto-idade">
                        Idade
                    </div>
                <input type="text" className="form-control"/>
                </div>
                <br />
                <div class="button">
                    <button color="unique" type="submit" class="botao">
                        Matricular
                    </button>
                </div>
            </form>
        );
    };
};