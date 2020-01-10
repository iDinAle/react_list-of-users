import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({ user }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.desc}</td>
  </tr>
);

UserRow.propTypes = { user: PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  surname: PropTypes.string,
  desc: PropTypes.string,
}).isRequired };

export default UserRow;
