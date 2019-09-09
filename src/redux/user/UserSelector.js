import { createSelector } from 'reselect';

const selectUser = state => state.user;

//From the state, select User and return the currentUser
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
