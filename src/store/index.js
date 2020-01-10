import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createSelector } from 'reselect';
import thunk from 'redux-thunk';

import usersLoadingReducer from './usersLoadingReducer';
import sortingReducer from './sortingReducer';
import paginationReducer from './paginationReducer';

export const getIsLoading = state => state.usersLoading.isLoading;
export const getHasError = state => state.usersLoading.hasError;
export const getActiveColumn = state => state.sorting.activeColumn;
export const getDirection = state => state.sorting.direction;
export const getPage = state => state.pagination.page;
export const getUsersPerPage = state => state.pagination.usersPerPage;
export const getUsers = createSelector(
  [
    state => state.usersLoading.users,
    getActiveColumn,
    getDirection,
  ],

  (users, activeColumn, direction) => {
    const by = {
      string: (a, b) => a[activeColumn].localeCompare(b[activeColumn]),
      number: (a, b) => a[activeColumn] - b[activeColumn],
    };
    let sortType = '';

    if (users[0]) {
      sortType = typeof users[0][activeColumn];
    }

    const callback = by[sortType] || (() => 0);
    const sortedUsers = users.sort(callback);

    if (direction === 'desc') {
      sortedUsers.reverse();
    }

    return sortedUsers;
  }
);

const reducer = combineReducers({
  usersLoading: usersLoadingReducer,
  sorting: sortingReducer,
  pagination: paginationReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

