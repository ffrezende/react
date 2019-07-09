import { ActionType } from 'typesafe-actions';

import * as hooksActions from './hooksActions';

export type HooksReduxStateType = {
  hooks: string;
};

export type HooksActionsType = ActionType<typeof hooksActions>;
