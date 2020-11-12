import React, { Component } from 'react';

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario';
import Usuario from '../Usuario/Usuario';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };

    this.adicionarUsuario = this.adicionarUsuario.bind(this);
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario];
    this.setState({ usuarios: usuarios });
  }

  removerUsuario(usuario) {
    if (
      window.confirm(
        `Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`
      )
    ) {
      let usuarios = this.state.usuarios;
      usuarios = usuarios.filter((x) => x.id !== usuario.id);
      this.setState({ usuarios: usuarios });
    }
  }

  componentDidMount() {
    // const response = fetch('https://reqres.in/api/users');
    // console.log(response);

    fetch('https://reqres.in/api/users')
      .then((resposta) => {
        // return res.text(); //convertendo a resposta para texto
        return resposta.json(); //convertendo a resposta para JSON
      })
      .then((dados) => {
        // console.log(dados); //recebe os dados
        console.log(dados.data);

        //percorrendo o array obtido e transformando as informações para que o estado definido compreenda.
        const usuarios = dados.data.map((usuario) => {
          return {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email,
          };
        });

        console.log(usuarios);

        //atualizando o estado
        // this.setState({ usuarios: usuarios }); //com isso exibe os usuarios no componente
        this.setState({ usuarios });
      });
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map((usuario) => (
          <Usuario
            key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    );
  }
}

export default Usuarios;
