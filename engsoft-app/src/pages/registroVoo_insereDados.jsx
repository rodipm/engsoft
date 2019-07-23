import * as React from 'react';
import './registroVoo.css';
import * as Datetime from 'react-datetime';
import "../../node_modules/react-datetime/css/react-datetime.css";
import auth from './auth';
import axios from 'axios';

const url = "http://localhost:5000/aeronaves";
var i;

export class RegistroVooDados extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aeronaves: []
        }
    }

    componentDidMount() {
        axios.get(url)
                .then(response => {console.log(response.data); 
                    let j = 0;
                    for(i = 0; i < response.data.length; i++) {
                        if(response.data[i].status == "Operacional") {
                            let a = this.state.aeronaves.slice(); 
                            a[j] = response.data[i];
                            j++;
                            this.setState({aeronaves: a});
                        }
                    }
                })
                .catch(error => console.error(error));
        this.state.flag = false;
    }
    
    render (){

        if(!auth.isAuthenticated()){
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
                    <div className="texto-nMatricula">
                        Aeronave do Voo pela identificação:
                    </div>
                    <select name="identificacao" onChange={this.props.handleChange} className="form-control col-3">
                        <option>Aeronaves</option>
                        {this.state.aeronaves.map(aeronave => {
                            return <option key = {aeronave.identificacao} value={aeronave.identificacao}>{aeronave.identificacao}</option>
                        })}
                    </select>

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