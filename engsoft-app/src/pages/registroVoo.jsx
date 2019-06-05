import * as React from 'react';
import './registroVoo.css';
import axios from 'axios';
import { Navbar } from '../components/navbar'
import { RegistroVooBusca } from './registroVoo_busca'
import { RegistroVooConfirma } from './registroVoo_confirmaAluno'
import { RegistroVooDados } from './/registroVoo_insereDados'

const url_aluno = "http://localhost:5000/aluno"
const url_aula = "http://localhost:5000/aula"

export class RegistroVoo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            situacao: 'busca',
            aluno_id: '',
            nome: '',
            duracao: '',
            data: '',
            parecer: ''
        };
        this.handleSubmitBusca = this.handleSubmitBusca.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitConfirma = this.handleSubmitConfirma.bind(this);
        this.handleSubmitDados = this.handleSubmitDados.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitBusca(event) {
        event.preventDefault();
        axios.get(url_aluno + '?id=' + this.state.aluno_id)
            .then((response) => {
                this.setState({ situacao: 'confirma', nome: response.data.nome})
            });
    }

    handleSubmitConfirma(event) {
        event.preventDefault();
        this.setState( {situacao: event.target.value} )
    }

    handleSubmitDados(event) {
        event.preventDefault();
        axios.post(url_aula, {
            aluno_id: this.state.aluno_id,
            duracao: this.state.duracao,
            data: this.state.data
        }).then((response) => {
                this.setState({ situacao: 'busca' })
            }).catch(err => console.error(err));
    }

    render (){
        let page;

        if (this.state.situacao === 'busca')
            page = <RegistroVooBusca handleSubmitBusca={this.handleSubmitBusca} handleChange={this.handleChange} />
        else if (this.state.situacao === 'confirma')
            page = <RegistroVooConfirma handleSubmitConfirma={this.handleSubmitConfirma} nome={this.state.nome} />
        else if (this.state.situacao === 'dados')
            page = <RegistroVooDados handleSubmitDados={this.handleSubmitDados} handleChange={this.handleChange} />
        

        return (
            <div>
                <Navbar />
                {page}
            </div>
        )
    }
}
