import { getUsersFromServer } from '../api/getUsersFromServer';

const USERS_LOADING_START = 'USERS_LOADING_START';
const USERS_LOADING_SUCCESS = 'USERS_LOADING_SUCCESS';
const USERS_LOADING_FAIL = 'USERS_LOADING_FAIL';

export const startUsersLoading = () => ({ type: USERS_LOADING_START });
export const handleUsersLoadingFail = () => ({ type: USERS_LOADING_FAIL });
export const handleUsersLoadingSuccess = users => ({
  type: USERS_LOADING_SUCCESS,
  users,
});

export const loadData = () => async(dispatch) => {
  dispatch(startUsersLoading());

  try {
    const usersData = await getUsersFromServer()

    return dispatch(handleUsersLoadingSuccess(usersData));
  } catch (e) {
    dispatch(handleUsersLoadingFail());
  }
};

const initialState = {
  users: [],
  isLoading: false,
  hasError: false,
};

const usersLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING_START:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };

    case USERS_LOADING_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false,
      };

    case USERS_LOADING_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export default usersLoadingReducer;
