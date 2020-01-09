import React from 'react';
import PropTypes from 'prop-types';

import UserRow from '../UsersRow/UsersRow';

const HEADERS = {
  id: 'ID',
  name: 'Name',
  surname: 'Surname',
  desc: 'Description',
};

const UsersTable = ({ users }) => {

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(HEADERS).map(header => (
            <th key={header}>{HEADERS[header]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};

export default UsersTable;
