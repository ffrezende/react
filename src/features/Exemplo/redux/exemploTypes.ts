import { ActionType } from 'typesafe-actions';

import * as exemploActions from './exemploActions';

export type ExemploReduxStateType = {
  loading: boolean;
};

export type ExemploActionsType = ActionType<typeof exemploActions>;
