import React from 'react';
// import classnames from 'classnames';
import { Link } from '@components/Link';
// import styles from './Pagination.module.scss';

const Pagination = ({ path, currentPage, limit, numPages }) => {
  const linkPrev = `${path}/${currentPage - 1}`;
  const linkNext = `${path}/${currentPage + 1}`;

  return (
    <div>
      Pagination
      <Link to={linkPrev}>
        Prev
      </Link>
      <Link to={linkNext}>
        Next
      </Link>
    </div>
);
};

export default Pagination;
