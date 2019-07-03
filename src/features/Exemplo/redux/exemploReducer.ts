import { ExemploActionsType, ExemploReduxStateType } from './exemploTypes';
import * as exemploActions from './exemploActions';

const INITIAL_STATE: ExemploReduxStateType = {
  loading: false
};

export default (state = INITIAL_STATE, action: ExemploActionsType): ExemploReduxStateType => {
  switch (action.type) {
    case exemploActions.SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
