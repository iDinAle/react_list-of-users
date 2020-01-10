import { connect } from 'react-redux';
import {
  getActiveColumn,
  getDirection,
  getPage,
  getUsersPerPage,
} from '../../store';
import { setActiveColumn, setDirection } from '../../store/sortingReducer';
import { setPage, setUsersPerPage } from '../../store/paginationReducer';
import { setQuery } from '../../store/queryReducer';

import UsersTable from './UsersTable';

const mapStateToProps = state => ({
  activeColumn: getActiveColumn(state),
  direction: getDirection(state),
  page: getPage(state),
  usersPerPage: getUsersPerPage(state),
});

export default connect(
  mapStateToProps, {
    setActiveColumn,
    setDirection,
    setPage,
    setUsersPerPage,
    setQuery,
  }
)(UsersTable);
