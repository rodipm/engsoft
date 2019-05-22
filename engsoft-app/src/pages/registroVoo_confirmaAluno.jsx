import * as React from 'react';
import './registroVoo.css';
import { Navbar } from '../components/navbar'

export class RegistroVooConfirma extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <form className="fundo">
                    <h2 className="titulo">Registrar Voo</h2>
                    
                    

                    <div className="button_row">
                        <div className="grey-text">Nome:</div>
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