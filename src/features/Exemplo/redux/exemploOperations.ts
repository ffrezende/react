import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store';

import { ExemploActionsType } from './exemploTypes';
import * as exemploActions from './exemploActions';

export type OperationResult = ThunkAction<void, AppState, undefined, ExemploActionsType>;

export const estadoLoading = (loading: boolean): OperationResult => async (dispatch, getState) => {
  dispatch(exemploActions.setLoading(loading));
};
