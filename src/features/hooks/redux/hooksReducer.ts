import { HooksActionsType, HooksReduxStateType } from './hooksTypes';
import * as hooksActions from './hooksActions';

const INITIAL_STATE: HooksReduxStateType = {
  hooks: ''
};

export default (state = INITIAL_STATE, action: HooksActionsType): HooksReduxStateType => {
  switch (action.type) {
    case hooksActions.SET_HOOKS:
      return { ...state, hooks: action.payload };

    default:
      return state;
  }
};
