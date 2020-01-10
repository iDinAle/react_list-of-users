import { connect } from 'react-redux';

import App from './App';
import {
  getIsLoading,
  getHasError,
  getIsLoaded,
} from '../../store';
import { loadData } from '../../store/usersLoadingReducer';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  hasError: getHasError(state),
  isLoaded: getIsLoaded(state),
});

export default connect(mapStateToProps, { loadData })(App);
