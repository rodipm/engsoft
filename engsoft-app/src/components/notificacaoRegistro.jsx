import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';


export class NotificacaoRegistro extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          style={{fontFamily: 'Montserrat Normal' }}
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Registro realizado com sucesso!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Número de cadastro: <b>{this.props.id}</b></h4>
            <p>
              A aeronave com identificação <b>{this.props.nome}</b> foi cadastrada com sucesso!
            </p>
          </Modal.Body>
          <Modal.Footer>
          <a href="/" ><Button onClick={this.props.onHide}>Close</Button></a>
          </Modal.Footer>
        </Modal>
      );
    }
  }