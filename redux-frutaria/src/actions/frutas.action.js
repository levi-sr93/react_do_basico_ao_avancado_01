const actions = {
  adicionar: (fruta) => ({
    type: 'ADICIONAR_FRUTA',
    payload: fruta,
  }),

  remover: (fruta) => ({
    type: 'REMOVER_FRUTA',
    payload: fruta,
  }),
};

export { actions };
