import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import UserRow from '../UserRow';
import Footer from '../Footer';
import Header from '../Header';
import { debounce } from '../../helpers/debounce';

const HEADERS = {
  id: 'ID',
  name: 'Name',
  surname: 'Surname',
  desc: 'Description',
};

const UsersTable = ({
  users,
  activeColumn,
  direction,
  setActiveColumn,
  setDirection,
  page,
  usersPerPage,
  setPage,
  setUsersPerPage,
  setQuery,
}) => {
  const [highlightedValue, setHighlightedValue] = useState('');

  const sortUsers = (clickedColumn) => {
    if (activeColumn !== clickedColumn) {
      setDirection('asc');
      setActiveColumn(clickedColumn);
    } else {
      setDirection(direction === 'asc' ? 'desc' : 'asc');
    }
  };

  const switchPage = (currentPage) => {
    setPage(currentPage);
  };
  const changeUsersPerPage = ($, data) => {
    setUsersPerPage(data.value);
    setPage(1);
  };

  const applySearchWithDebounce = useCallback(
    debounce((value) => {
      setQuery(value);
    }, 500),
    []
  );

  const searchUsers = ($, data) => {
    const value = data.value.toLowerCase()
      .replace(/[/\\+*()?[\]]/g, '');

    setPage(1);
    setHighlightedValue(value);
    applySearchWithDebounce(value);
  };

  const usersAmount = users.length;
  const pagesAmount = Math.ceil(usersAmount / usersPerPage);
  const firstUser = (page - 1) * usersPerPage + 1;
  let lastUser = page * usersPerPage;
  const visibleUsers = users.slice(firstUser - 1, lastUser);

  lastUser = lastUser > usersAmount ? usersAmount : lastUser;

  return (
    <div>
      <Header
        onChangeUsersPerPage={changeUsersPerPage}
        onSearchUsers={searchUsers}
        inputValue={highlightedValue}
        selectValue={usersPerPage}
      />

      <table>
        <thead>
          <tr>
            {Object.keys(HEADERS).map(header => (
              <th
                onClick={() => sortUsers(header)}
                key={header}
              >
                {HEADERS[header]}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {visibleUsers.map(user => (
            <UserRow
              key={user.id}
              user={user}
              highlightedValue={highlightedValue}
            />
          ))}
        </tbody>
      </table>

      <Footer
        usersAmount={usersAmount}
        firstUser={firstUser}
        lastUser={lastUser}
        pagesAmount={pagesAmount}
        activePage={page}
        onSwitchPage={switchPage}
      />
    </div>
  );
};

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  activeColumn: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  setActiveColumn: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default UsersTable;
