import * as React from 'react';
import './registroVoo.css';
import { getRole } from "./tokenHolder";

const url = "http://localhost:5000/aluno"

export class RegistroVooBusca extends React.Component{
    render (){

        if(getRole() == 0){
            alert("Permissão necessária para acessar");
            window.location.href = "/";
        }

        return (
            <div>
                <form className="fundo" >
                    <h2 className="titulo">Registrar Voo</h2>
                    <div htmlFor="nMatricula" className="grey-text">
                        <div className="texto-nMatricula">
                            Número de Matricula
                        </div>

                        <input type="text" name="aluno_id" onChange={this.props.handleChange} className="form-control col-3"/>

                        
                        <div class="button">
                            <button type="button" className="button-primary" onClick={this.props.handleSubmitBusca}>Buscar</button>
                        </div>
                    </div>      
                </form>
            </div>
        )
    }
}
