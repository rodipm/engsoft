import * as React from 'react';
import './registroVoo.css';
/*import axios from 'axios';*/
import { Navbar } from '../components/navbar'

const url = "http://localhost:5000/aluno"

export class RegistroVoo extends React.Component{
    /*constructor(props) {
        super(props);
        this.state = {aluno_id: ''}
        this.hasName = false;
        this.name  = '';
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(url, this.state)
            .then((response) => {
                this.hasName = true;
                this.name = response.data.nome;
            });
    }*/
    render (){
        return (
            <div>
                <Navbar />
                <form className="fundo" /*onSubmit={this.handleSubmit}*/>
                    <h2 className="titulo">Registrar Voo</h2>
                    <div htmlFor="nMatricula" className="grey-text">
                        <div className="texto-nMatricula">
                            Número de Matricula
                        </div>

                        <input type="text" /*name="user_id" onChange={this.handleChange}*/ className="form-control col-3"/>

                        
                        <div class="button">
                            <a href="/registroVooConfirma">
                                <button type="button" className="button-primary" onclick="alert(); ">Buscar</button>
                            </a>
                        </div>
                    </div>      
                </form>
            </div>
        )
    }
}
