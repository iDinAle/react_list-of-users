import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';
import UsersTable from '../UsersTable';

const App = ({ users, isLoading, hasError, loadData }) => (
  <div className="App">
    <h1 className="main-title">Table of users</h1>

    {users.length ? (
      <UsersTable users={users} />
    ) : (
      <>
        <h3 className="message-title">
          {hasError ? 'Something went wrong ...' : 'No users yet!'}
        </h3>

        <button
          className="load-btn"
          type="button"
          onClick={async() => {
            await loadData();
          }}
        >
          {isLoading ? 'Loading ...' : 'Load users'}
        </button>
      </>
    )}
  </div>
);

App.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default App;
