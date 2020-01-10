const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_USERS_PER_PAGE = 'SET_USERS_PER_PAGE';

export const setPage = page => ({
  type: SET_ACTIVE_PAGE,
  page,
});
export const setUsersPerPage = usersPerPage => ({
  type: SET_USERS_PER_PAGE,
  usersPerPage,
});

const initialState = {
  page: 1,
  usersPerPage: 5,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        page: action.page,
      };

    case SET_USERS_PER_PAGE:
      return {
        ...state,
        usersPerPage: action.usersPerPage,
      };

    default:
      return state;
  }
};

export default paginationReducer;
