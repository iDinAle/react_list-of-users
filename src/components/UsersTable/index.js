import { connect } from 'react-redux';
import { getActiveColumn, getDirection } from '../../store';
import { setActiveColumn, setDirection } from '../../store/sortingReducer';

import UsersTable from './UsersTable';

const mapStateToProps = state => ({
  activeColumn: getActiveColumn(state),
  direction: getDirection(state),
});

export default connect(
  mapStateToProps,
  { setActiveColumn, setDirection }
)(UsersTable);
