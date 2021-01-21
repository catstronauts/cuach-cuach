import React from 'react';
// import classnames from 'classnames';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
// import styles from './Pagination.module.scss';

const Pagination = ({ path, currentPage, limit, numPages }) => {
  const linkPrev =  (currentPage == 2)
    ? `${path}`
    : `${path}/${currentPage - 1}`;
  const linkNext = `${path}/${currentPage + 1}`;
  const disablePrev = (currentPage == 1)
    ? true
    : false;
  const disableNext = (currentPage == numPages)
    ? true
    : false;


  return (numPages != 1) ? (
    <div>
      <Link to={linkPrev}>
        <Button disabled={disablePrev}>Prev</Button>
      </Link>
      <Link to={linkNext}>
        <Button disabled={disableNext}>Next</Button>
      </Link>
    </div>
  ) : null;
};

export default Pagination;
