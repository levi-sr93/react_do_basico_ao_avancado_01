import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetalhesDoUsuario() {
  const { codigo } = useParams(); // desconstruindo os dados que vem da URL

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${codigo}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.data) {
          console.log(dados.data);
          setUsuario({
            id: dados.data.id,
            nome: dados.data.first_name,
            sobrenome: dados.data.last_name,
            email: dados.data.email,
            foto: dados.data.avatar,
          });
        }
      });
  }, [codigo]);

  if (usuario.nome !== undefined) {
    return (
      <>
        <h1>
          {usuario.nome} {usuario.sobrenome}
        </h1>
        <img src={usuario.foto} alt={usuario.nome} />
        <p>{usuario.email}</p>
        <Link to="/usuarios">Voltar</Link>
      </>
    );
  }

  return (
    <>
      <h1>Usuario Não encontrado</h1>
      <Link to="/usuarios">Voltar</Link>
    </>
  );
}

export default DetalhesDoUsuario;
