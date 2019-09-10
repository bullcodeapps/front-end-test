import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import bcrypt from 'bcryptjs';

import { Container, Form, SubmitButton } from './styles';
import { Mensagem } from '../../styles/mensagem';

export default class Main extends Component {
  state = {
    nome: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
    mensagem: { mostra: false, texto: '', tipo: '' },
    usuarios: [],
  };

  componentDidMount() {
    const usuarios = localStorage.getItem('usuario');

    if (usuarios) {
      this.setState({ usuarios: JSON.parse(usuarios) });
    }
  }

  componentDidUpdate(_, preventState) {
    const { usuarios } = this.state;

    if (preventState.usuarios !== usuarios) {
      localStorage.setItem('usuario', [JSON.stringify(usuarios)]);
    }
  }

  onChangeNome = e => {
    this.setState({ nome: e.target.value });
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangeSenha = e => {
    this.setState({ senha: e.target.value });
  };

  onChangeConfirmacaoSenha = e => {
    this.setState({ confirmacaoSenha: e.target.value });
  };

  onSubmitCadastroUser = async e => {
    e.preventDefault();
    const { nome, email, senha, confirmacaoSenha, usuarios } = this.state;

    const bCamposValido = this.validaValorCampos([
      nome,
      email,
      senha,
      confirmacaoSenha,
    ]);

    if (bCamposValido) {
      if (!(senha === confirmacaoSenha)) {
        this.setState({
          mensagem: {
            mostra: true,
            texto: 'Senhas não são iguais',
            tipo: 'error',
          },
        });

        return false;
      }

      const senhaFormatada = await bcrypt.hash(senha, 8);

      await this.setState({
        mensagem: {
          mostra: true,
          texto: 'Cadastro realizado com sucesso',
          tipo: 'success',
        },
        usuarios: [...usuarios, { nome, email, senhaFormatada }],
      });

      document.querySelector('#nome').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#senha').value = '';
      document.querySelector('#confirmacao_senha').value = '';
    } else {
      return false;
    }
  };

  validaValorCampos = aCampos => {
    let bValido = true;

    aCampos.forEach(Campo => {
      if (Campo === '') {
        bValido = false;
      }
    });

    if (!bValido) {
      this.setState({
        mensagem: { mostra: true, texto: 'Campos inválidos', tipo: 'error' },
      });
    }

    return bValido;
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
          <Link to="/">Voltar</Link>
          <h1>Cadastre-se</h1>

          <Form
            error={mensagem.tipo === 'error'}
            invalido={mensagem.tipo === 'error'}
            onSubmit={this.onSubmitCadastroUser}
          >
            <input
              onChange={this.onChangeNome}
              id="nome"
              type="text"
              placeholder="Nome"
            />

            <input
              onChange={this.onChangeEmail}
              id="email"
              type="email"
              placeholder="Email"
            />

            <input
              onChange={this.onChangeSenha}
              id="senha"
              type="password"
              placeholder="Senha"
            />

            <input
              onChange={this.onChangeConfirmacaoSenha}
              id="confirmacao_senha"
              type="password"
              placeholder="Repita sua senha"
            />

            <SubmitButton>Cadastrar</SubmitButton>
          </Form>
        </Container>
      </>
    );
  }
}
