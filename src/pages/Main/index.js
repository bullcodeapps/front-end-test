import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { Container, Form, SubmitButton } from './styles';
import { Mensagem } from '../../styles/mensagem';

export default class Main extends Component {
  state = {
    email: '',
    senha: '',
    nome: '',
    valido: false,
    mensagem: { mostra: false, texto: '', tipo: '' },
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangeSenha = e => {
    this.setState({ senha: e.target.value });
  };

  onSubmitLogin = e => {
    e.preventDefault();
    const aUsuario = JSON.parse(localStorage.getItem('usuario'));
    const { valido, nome } = this.state;
    // bcrypt.compare(password, this.password_hash);
    this.validaLogin(aUsuario);

    if (valido) {
      const token = jwt.sign({ nome }, 'b22ff920d33b27d01ad9170150190894', {
        expiresIn: '7d',
      });

      window.location.href = `http://localhost:3000/home/${token}`;
    }
  };

  validaLogin = aUsuario => {
    const { email, senha } = this.state;
    let bValido = false;
    if (aUsuario.length > 1) {
      aUsuario.forEach(async campo => {
        if (email === campo.email) {
          if (await bcrypt.compare(senha, campo.senhaFormatada)) {
            this.setState({ nome: campo.nome, valido: true });
            bValido = true;
          }
        }
      });
      if (bValido) {
        return true;
      }
    } else {
      this.setState({
        mensagem: {
          mostra: true,
          texto: 'Nenhum usuário cadastrado',
          tipo: 'error',
        },
      });
    }
    return false;
  };

  render() {
    let mensagemTexto = '';
    const { mensagem } = this.state;

    if (mensagem.texto) {
      mensagemTexto = (
        <Mensagem error={mensagem.tipo === 'error'}>{mensagem.texto}</Mensagem>
      );
      setTimeout(() => this.setState({ mensagem: { mostra: false } }), 2500);
    }
    return (
      <>
        {mensagemTexto}
        <Container>
          <h1>Login</h1>

          <Form onSubmit={this.onSubmitLogin}>
            <input
              onChange={this.onChangeEmail}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={this.onChangeSenha}
              type="password"
              placeholder="Senha"
            />
            <div>
              <SubmitButton>Login</SubmitButton>
              <Link to="/cadastro">Cadastre-se</Link>
            </div>
          </Form>
        </Container>
      </>
    );
  }
}
