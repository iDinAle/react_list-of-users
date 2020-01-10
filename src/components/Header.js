import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'semantic-ui-react';

const usersPerPageOptions = [
  {
    key: 2, value: 2, text: '2 users per page',
  },
  {
    key: 3, value: 3, text: '3 users per page',
  },
  {
    key: 5, value: 5, text: '5 users per page',
  },
  {
    key: 10, value: 10, text: '10 users per page',
  },
  {
    key: 20, value: 20, text: '20 users per page',
  },
];

const Header = (
  { onChangeUsersPerPage, onSearchUsers, inputValue, selectValue }
) => (
  <div className="table-options">
    <Select
      placeholder="Select users per page"
      options={usersPerPageOptions}
      onChange={onChangeUsersPerPage}
      value={selectValue}
    />

    <Input
      icon="search"
      placeholder="Search..."
      iconPosition="left"
      type="search"
      onChange={onSearchUsers}
      value={inputValue}
    />
  </div>
);

Header.propTypes = {
  onChangeUsersPerPage: PropTypes.func.isRequired,
  onSearchUsers: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  selectValue: PropTypes.number.isRequired,
};

export default Header;
