import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store';

import * as loadingOperations from '../../loading/redux/loadingOperation';
import { ExemploActionsType } from './exemploTypes';
import * as exemploActions from './exemploActions';

export type OperationResult = ThunkAction<void, AppState, undefined, ExemploActionsType>;

export const estadoLoading = (loading: boolean): OperationResult => async (dispatch, getState) => {
  dispatch(loadingOperations.alteraEstadoBackdropLoading(true));
  setTimeout(() => {
    dispatch(exemploActions.setLoading(loading));
    dispatch(loadingOperations.alteraEstadoBackdropLoading(false));
  }, 1000);
};
