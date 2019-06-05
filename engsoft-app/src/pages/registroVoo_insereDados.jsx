import * as React from 'react';
import './registroVoo.css';

export class RegistroVooInsereDados extends React.Component{
    render (){
        return (
            <div>
                <form className="fundo">

                    <div htmlFor="horaVoo" className="grey-text">
                        <div className="texto-horaVoo">
                            Hora do Voo
                        </div>
                        <input type="text" name="horaVoo" onChange={this.props.handleChange} className="form-control col-3"/>
                    </div>

                    <br />

                    <div htmlFor="nHorasDoVoo" className="grey-text">
                        <div className="texto-nHorasDoVoo">
                            Número de Horas do Voo
                        </div>
                        <input type="text" name="duracaoVoo" onChange={this.props.handleChange} className="form-control col-3"/>
                    </div>

                    <br />
                    
                    <div htmlFor="parecer" className="grey-text">
                        <div className="texto-parecer">
                            Parecer
                        </div>

                        <select name="parecer" value="Escolha uma nota" onChange={this.props.handleChange} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    
                    <br />
                    
                    <div class="button">
                        <button color="unique" type="submit" class="button-primary" onClick={this.props.handleSubmitDados}>
                            Finalizar
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}