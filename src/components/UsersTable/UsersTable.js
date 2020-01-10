import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UserRow from '../UserRow';
import Footer from '../Footer';

const HEADERS = {
  id: 'ID',
  name: 'Name',
  surname: 'Surname',
  desc: 'Description',
};

const UsersTable = (
  { users, activeColumn, direction, setActiveColumn, setDirection }
) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
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
  }

  const usersAmount = users.length;
  const pagesAmount = Math.ceil(usersAmount / itemsPerPage);
  const firstUser = (page - 1) * itemsPerPage + 1;
  let lastUser = page * itemsPerPage;
  const visibleUsers = users.slice(firstUser - 1, lastUser);
  lastUser = lastUser > usersAmount ? usersAmount : lastUser;

  return (
    <div>
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
            <UserRow key={user.id} user={user} />
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
};

export default UsersTable;
