import React, { useState } from 'react';

import './AdicionarUsuario.css';

function AdicionarUsuario(props) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    //fazendo a requisição do tipo POST a partir do formulário
    const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
    };

    fetch('https://reqres.in/api/users', {
      //passando como segundo parametro informações opcionais
      method: 'POST', //se não informado ele utiliza o padrão que é GET
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario),
    })
      .then((resposta) => resposta.json()) //convertendo a resposta para JSON
      .then((dados) => {
        setNome('');
        setSobrenome('');
        setEmail('');
        props.adicionarUsuario(dados);
      });
  };

  return (
    <div className="AdicionarUsuario">
      <h2>Adicionar Usuário</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            ></input>
          </div>
          <div className="Coluna">
            <label>Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={sobrenome}
              onChange={(event) => setSobrenome(event.target.value)}
              required
            ></input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
          </div>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AdicionarUsuario;
