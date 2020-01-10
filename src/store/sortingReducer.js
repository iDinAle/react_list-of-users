const SET_ACTIVE_COLUMN = 'SET_ACTIVE_COLUMN';
const SET_DIRECTION = 'SET_DIRECTION';

export const setActiveColumn = activeColumn => ({
  type: SET_ACTIVE_COLUMN,
  activeColumn,
});
export const setDirection = direction => ({
  type: SET_DIRECTION,
  direction,
});

const initialState = {
  activeColumn: '',
  direction: 'asc',
};

const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_COLUMN:
      return {
        ...state,
        activeColumn: action.activeColumn,
      };

    case SET_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };

    default:
      return state;
  }
};

export default sortingReducer;
