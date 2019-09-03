import { SET_CURRENT_USER } from 'redux/constants';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
