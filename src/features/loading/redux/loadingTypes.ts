import { ActionType } from 'typesafe-actions';
import * as loadingActions from './loadingActions';
import * as loadingOperations from './loadingOperation';

export type LoadingReduxStateType = {
  carregando: boolean;
};

export type LoadingActionsType = ActionType<typeof loadingActions>;
export type LoadingOperationsType = ActionType<typeof loadingOperations>;
