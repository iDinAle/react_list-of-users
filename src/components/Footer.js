import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  firstUser,
  lastUser,
  usersAmount,
  pagesAmount,
  activePage,
  onSwitchPage,
}) => {
  const pageButtons = new Array(pagesAmount).fill(0).map((_, i) => i + 1);
  let firstVisiblePage = activePage - 1;
  let lastVisiblePage = activePage + 1;

  if (activePage === 1) {
    firstVisiblePage = activePage;
    lastVisiblePage = activePage + 2;
  }

  if (activePage === pagesAmount) {
    firstVisiblePage = activePage - 2 < 1 ? 1 : activePage - 2;
    lastVisiblePage = activePage;
  }

  const visiblePageButtons = pageButtons.slice(
    firstVisiblePage - 1, lastVisiblePage
  );

  return (
    <div className="table-options">
      <div>
        {`Showing ${firstUser} to ${lastUser} of ${usersAmount} entries`}
      </div>

      <div className="pagination">
        <button
          className="pagination__button pagination__button--control"
          type="button"
          onClick={() => onSwitchPage(1)}
        >
          {'<<'}
        </button>

        <button
          className="pagination__button pagination__button--control"
          type="button"
          onClick={() => onSwitchPage(
            activePage - 1 < 1 ? 1 : activePage - 1
          )}
        >
          {'<'}
        </button>

        {visiblePageButtons.map(page => (
          <button
            onClick={() => onSwitchPage(page)}
            type="button"
            key={page}
            className={`pagination__button
              ${page === activePage && 'pagination__button--active'}`}
          >
            {page}
          </button>
        ))}

        <button
          className="pagination__button pagination__button--control"
          type="button"
          onClick={() => onSwitchPage(
            activePage + 1 > pagesAmount ? pagesAmount : activePage + 1
          )}
        >
          {'>'}
        </button>

        <button
          className="pagination__button pagination__button--control"
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
