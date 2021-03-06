import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions/frutas.action';

const Fruta = ({ fruta }) => {
  const dispatch = useDispatch();

  return (
    <div className="fruta">
      <ul>
        <li>
          <strong>Fruta: </strong> {fruta.nome}
        </li>

        <li>
          <strong>Quantidade: </strong> {fruta.quantidade}
        </li>
      </ul>

      <button onClick={() => dispatch(actions.remover(fruta))}>X</button>
    </div>
  );
};

export default Fruta;
