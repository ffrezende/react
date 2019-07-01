import * as loadingActions from './loadingActions';
import { LoadingReduxStateType, LoadingActionsType } from './loadingTypes';

const INITIAL_STATE: LoadingReduxStateType = {
  carregando: false
};

export default (state = INITIAL_STATE, action: LoadingActionsType): LoadingReduxStateType => {
  switch (action.type) {
    case loadingActions.ALTERAR_ESTADO_BACKDROP_LOADING:
      return {
        ...state,
        carregando: action.payload.carregando
      };

    default:
      return state;
  }
};
