import React from 'react';
import PropTypes from 'prop-types';
import { highlightText } from '../helpers/highlightText';

const UserRow = ({ user, highlightedValue }) => (
  <tr>
    <td className="table__cell">
      {highlightText(user.id, highlightedValue)}
    </td>

    <td className="table__cell">
      {highlightText(user.name, highlightedValue)}
    </td>

    <td className="table__cell">
      {highlightText(user.surname, highlightedValue)}
    </td>

    <td className="table__cell">
      {highlightText(user.desc, highlightedValue)}
    </td>
  </tr>
);

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
  highlightedValue: PropTypes.string.isRequired,
};

export default UserRow;
