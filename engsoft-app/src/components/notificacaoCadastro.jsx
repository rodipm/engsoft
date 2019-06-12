import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';


export class NotificacaoCadastro extends React.Component {
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
              Cadastro realizado com sucesso!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Número de cadastro: <b>{this.props.id}</b></h4>
            <p>
              Seu usuário foi cadastrado com sucesso. <b>{this.props.nome}</b> foi cadastrado com o número de usuário <b>{this.props.id}</b>!
            </p>
          </Modal.Body>
          <Modal.Footer>
          <a href="/" ><Button onClick={this.props.onHide}>Close</Button></a>
          </Modal.Footer>
        </Modal>
      );
    }
  }