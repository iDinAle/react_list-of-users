import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import UsersTable from '../UsersTable/UsersTable';

const App = ({ users, isLoading, hasError, loadData }) => (
  <div className="App">
    <h1>Table of users</h1>

    {users.length ? (
      <UsersTable users={users} />
    ) : (
      <>
        <h2>{hasError ? 'Error occured!!!' : 'No users yet!'}</h2>

        <button
          className="load-btn"
          type="button"
          onClick={async() => {
            await loadData();
          }}
        >
          {isLoading ? 'Loading...' : 'Load users'}
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
