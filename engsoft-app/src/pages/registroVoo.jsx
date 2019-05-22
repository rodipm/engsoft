import * as React from 'react';
import './registroVoo.css';
import { Navbar } from '../components/navbar'

export class RegistroVoo extends React.Component{
    render (){
        return (
            <div>
                <Navbar />
                <form className="fundo">
                    <h2 className="titulo">Registrar Voo</h2>
                    <div htmlFor="nMatricula" className="grey-text">
                        <div className="texto-nMatricula">
                            Número de Matricula
                        </div>

                        <input type="text" className="form-control"/>

                        <div class="button">
                            <button color="unique" type="submit" class="botao">
                                Buscar
                            </button>
                        </div>
                    </div>                    

                    <div>
                        <p>Nome:</p>
                        <p></p>
                    </div>
                    
                    <br />

                    <div htmlFor="horaVoo" className="grey-text">
                        <div className="texto-horaVoo">
                            Hora do Voo
                        </div>
                        <input type="text" className="form-control"/>
                    </div>

                    <br />

                    <div htmlFor="nHorasDoVoo" className="grey-text">
                        <div className="texto-nHorasDoVoo">
                            Número de Horas do Voo
                        </div>
                        <input type="text" className="form-control"/>
                    </div>

                    <br />
                    
                    <div htmlFor="parecer" className="grey-text">
                        <div className="texto-parecer">
                            Parecer
                        </div>
                        <input type="text" className="form-control"/>
                    </div>
                    
                    <br />
                    
                    <div class="button">
                        <button color="unique" type="submit" class="botao">
                            Matricular
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}
