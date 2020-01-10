import React from 'react';
import PropTypes from 'prop-types';

import { generatePageButtons } from '../helpers/generatePageButtons';

const Footer = ({
  firstUser,
  lastUser,
  usersAmount,
  pagesAmount,
  onSwitchPage,
  activePage,
}) => {
  const pageButtons = generatePageButtons(pagesAmount);

  const slicePageButtons = () => {
    let firstVisiblePage = activePage - 1;
    let lastVisiblePage = activePage + 1

    if (activePage === 1) {
      firstVisiblePage = activePage;
      lastVisiblePage = activePage + 2;
    }

    if (activePage === pagesAmount) {
      firstVisiblePage = activePage - 2 < 1 ? 1 : activePage - 2;
      lastVisiblePage = activePage;
    }

    return pageButtons.slice(firstVisiblePage - 1, lastVisiblePage);
  }

  const visiblePageButtons = slicePageButtons();

  return (
    <div className="table-options">
      <div>
        {`Showing ${firstUser} to ${lastUser} of ${usersAmount} entries`}
      </div>

      <div className="table-pagination">
        <button
          className="table-pagination__prev-btn"
          type="button"
          onClick={() => onSwitchPage(1)}
        >
          {'<<'}
        </button>

        <button
          className="table-pagination__prev-btn"
          type="button"
          onClick={() => onSwitchPage(
            activePage - 1 < 1 ? 1 : activePage - 1
          )}
        >
          {'<'}
        </button>

        {visiblePageButtons.map((page) => (
          <button
            onClick={() => onSwitchPage(page)}
            type="button"
          >
            {page}
          </button>
        ))}

        <button
          className="paginator__prev-btn"
          type="button"
          onClick={() => onSwitchPage(
            activePage + 1 > pagesAmount ? pagesAmount : activePage + 1
          )}
        >
          {'>'}
        </button>

        <button
          className="paginator__prev-btn"
          type="button"
          onClick={() => onSwitchPage(pagesAmount)}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  firstUser: PropTypes.number.isRequired,
  lastUser: PropTypes.number.isRequired,
  usersAmount: PropTypes.number.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onSwitchPage: PropTypes.func.isRequired,
};

export default Footer;
