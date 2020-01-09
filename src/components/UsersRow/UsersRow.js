import React from 'react';
import PropTypes from 'prop-types';

const UsersRow = ({ user }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.desc}</td>
  </tr>
);

UsersRow.propTypes = { user: PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  desc: PropTypes.string,
}).isRequired };

export default UsersRow;
