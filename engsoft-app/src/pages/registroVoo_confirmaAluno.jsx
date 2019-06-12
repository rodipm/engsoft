import * as React from 'react';
import './registroVoo.css';

export class RegistroVooConfirma extends React.Component{
    render(){
        return(
            <div>
                <form className="fundo">
                    <h2 className="titulo">Registrar Voo</h2>
                    <div className="button_row">
                        <div className="grey-text">Nome: <b>{this.props.nome}</b></div>
                        <br/>
                        <button type="button" value="dados" onClick={this.props.handleSubmitConfirma} className="button-primary">Confirmar</button>
                        <button type="button" value="busca" onClick={this.props.handleSubmitConfirma} className="button-secundary">Voltar</button>
                    </div>
                    
                    <br />                  
                    

                </form>
            </div>
        )
    }
}