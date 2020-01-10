import { connect } from 'react-redux';

import App from './App';
import { getIsLoading, getHasError, getUsers } from '../../store';
import { loadData } from '../../store/usersLoadingReducer';

const mapStateToProps = state => ({
  users: getUsers(state),
  isLoading: getIsLoading(state),
  hasError: getHasError(state),
});

export default connect(mapStateToProps, { loadData })(App);
