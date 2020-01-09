import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersLoadingReducer from './usersLoadingReducer';

export const getIsLoading = state => state.usersLoading.isLoading;
export const getHasError = state => state.usersLoading.hasError;
export const getUsers = state => state.usersLoading.users;

const reducer = combineReducers({
  usersLoading: usersLoadingReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
