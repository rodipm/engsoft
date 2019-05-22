import * as React from 'react';
import './registroVoo.css';
import { Navbar } from '../components/navbar'

export class RegistroVooDados extends React.Component{
    render (){
        return (
            <div>
                <Navbar />
                <form className="fundo">

                    <div htmlFor="horaVoo" className="grey-text">
                        <div className="texto-horaVoo">
                            Hora do Voo
                        </div>
                        <input type="text" className="form-control col-3"/>
                    </div>

                    <br />

                    <div htmlFor="nHorasDoVoo" className="grey-text">
                        <div className="texto-nHorasDoVoo">
                            Número de Horas do Voo
                        </div>
                        <input type="text" className="form-control col-3"/>
                    </div>

                    <br />
                    
                    <div htmlFor="parecer" className="grey-text">
                        <div className="texto-parecer">
                            Parecer
                        </div>

                        <select name="" id="">
                            <option value="var">Escolha Nota</option>
                            <option value="valor">1</option>
                            <option value="valor">2</option>
                            <option value="valor">3</option>
                            <option value="valor">4</option>
                            <option value="valor">5</option>
                        </select>
                    </div>
                    
                    <br />
                    
                    <div class="button">
                        <button color="unique" type="submit" class="button-primary">
                            Matricular
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}