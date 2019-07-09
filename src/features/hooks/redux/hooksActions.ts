import { createAction } from 'typesafe-actions';

export const SET_HOOKS = 'hooks/SET_HOOKS';

export const setHooks = createAction(SET_HOOKS, action => {
  return (hooks: string) => action(hooks);
});
