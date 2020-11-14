import React, { useState, useEffect } from 'react';

import Usuario from '../Usuario/Usuario';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
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
        setUsuarios(usuarios);
      });
  }, []);

  const removerUsuario = (usuario) => {
    if (
      window.confirm(
        `Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`
      )
    )
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE',
      }).then((resposta) => {
        console.log(resposta);
        setUsuarios(usuarios.filter((x) => x.id !== usuario.id));
      });
  };

  return (
    <>
      {usuarios.map((usuario) => (
        <Usuario
          key={usuario.id}
          usuario={usuario}
          removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  );
}

export default Usuarios;
