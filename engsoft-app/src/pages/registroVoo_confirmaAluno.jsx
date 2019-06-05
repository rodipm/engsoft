import * as React from 'react';
import './registroVoo.css';
import { Navbar } from '../components/navbar'

export class RegistroVooConfirmaAluno extends React.Component{
    render(){
        return(
            <div>
                <form className="fundo">
                    <h2 className="titulo">Registrar Voo</h2>
                    
                    

                    <div className="button_row">
                        <div className="grey-text">Nome: <bold>{this.props.name}</bold></div>
                        <br/>
                        <a href="/registroVooDados">
                            <button type="button" className="button-primary" onclick="alert(); " >Confirmar</button>
                        </a>
                        <a href="/registroVoo">
                            <button type="button" className="button-primary" onclick="alert(); " >Voltar</button>
                        </a>
                    </div>
                    
                    <br />                  
                    

                </form>
            </div>
        )
    }
}