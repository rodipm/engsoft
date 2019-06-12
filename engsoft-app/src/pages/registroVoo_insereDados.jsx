import * as React from 'react';
import './registroVoo.css';
import * as Datetime from 'react-datetime';
import "../../node_modules/react-datetime/css/react-datetime.css";
import { getRole } from "./tokenHolder";

export class RegistroVooDados extends React.Component{
    render (){

        if(getRole() == 0){
            alert("Permissão necessária para acessar");
            window.location.href = "/";
        }

        return (
            <div>
                <form className="fundo">

                    <div htmlFor="Data" className="grey-text">
                        <div className="texto-nHorasDoVoo col-3">
                            Dia e horário do voo
                            <Datetime onChange={this.props.handleChangeDateTime} className="centered-calendar"/>
                        </div>
                    </div>

                    <br />

                    <div htmlFor="nHorasDoVoo" className="grey-text">
                        <div className="texto-nHorasDoVoo">
                            Número de Horas do Voo
                        </div>
                        <input type="text" name="duracao" onChange={this.props.handleChange} className="col-3"/>
                    </div>

                    <br />
                    
                    <div htmlFor="parecer" className="grey-text">
                        <div className="texto-parecer">
                            Parecer
                        </div>

                        <select onChange={this.props.handleChange} name="parecer">
                            <option> Escolha uma nota</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    
                    <br />
                    
                    <div class="button">
                        <button color="unique" type="button" onClick={this.props.handleSubmitDados} class="button-primary">
                            Registrar
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}