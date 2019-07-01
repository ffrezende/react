import * as loadingActions from './loadingActions';
import { LoadingActionsType } from './loadingTypes';
import { AppState } from '../../../store';
import { ThunkAction } from 'redux-thunk';

export type OperationResult = ThunkAction<void, AppState, undefined, LoadingActionsType>;

export const alteraEstadoBackdropLoading = (
  carregando: boolean
): OperationResult => async dispatch => {
  dispatch(loadingActions.alterarEstadoBackdropLoading(carregando));
};
