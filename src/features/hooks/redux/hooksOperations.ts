import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store';

import * as loadingOperations from '../../loading/redux/loadingOperation';
import { HooksActionsType } from './hooksTypes';
import * as hooksActions from './hooksActions';

export type OperationResult = ThunkAction<void, AppState, undefined, HooksActionsType>;
