import * as React from 'react';
import './registroVoo.css';
import axios from 'axios';
import { Navbar } from '../components/navbar'
import { RegistroVooConfirmaAluno } from './registroVoo_confirmaAluno'
import { RegistroVooInsereDados } from './registroVoo_insereDados'

const url_aluno = "http://localhost:5000/aluno"
const url_aula = "http://localhost:5000/aula"

export class RegistroVoo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {situacao: 'inicio', aluno_id: '', hasName: false, name: '', parecer: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitDados = this.handleSubmitDados.bind(this);
        this.handleSubmitNome = this.handleSubmitNome.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitNome(event) {
        event.preventDefault();
        axios.get(url_aluno + '?CPF=' + this.state.aluno_id)
            .then((response) => {
                console.log(response.data.nome)
                this.setState({ situacao: 'insereDados', hasName: true, name: response.data.nome, horaVoo: null, duracaoVoo: 0 })
            }).catch(error => console.error(error));
    }

    handleSubmitDados(event) {
        this.setState({ situacao: 'confirmaAluno'})

    }

    render (){

        let page;

        if (this.state.situacao === 'inicio')
            page =
            <form className="fundo">
                    <h2 className="titulo">Registrar Voo</h2>
                    <div htmlFor="nMatricula" className="grey-text">
                    <div className="texto-nMatricula">
                        Número de Matricula
                        </div>

                    <input type="text" name="aluno_id" onChange={this.handleChange} className="form-control col-3" />


                    <div class="button">
                        <button type="button" className="button-primary" onClick={this.handleSubmitNome}>Buscar</button>
                    </div>
                </div>
            </form>
        else if (this.state.situacao === 'insereDados')
            page = <RegistroVooInsereDados handleSubmitDados={this.handleSubmitDados}/>
        else if (this.state.situacao === 'confirmaAluno')
            page = <RegistroVooConfirmaAluno name={this.state.name}/>

        return (
            <div>
                <Navbar />
                {page}
            </div>
        )
    }
}
