import { combineReducers } from 'redux';
import { reducers as frutaReducers } from './fruta.reducer';

//caso tivesse mais reducers por exemplo para vegetais aqui importariamos e combinariamos
//para exportar tudo de forma única

const reducers = combineReducers({ frutaReducers });

export { reducers };
