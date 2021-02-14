import React from 'react';
import classnames from 'classnames';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import styles from './Pagination.module.scss';

const Pagination = ({ path, currentPage, limit, numPages, className }) => {
  const linkPrev = (currentPage === 2)
    ? `${path}`
    : `${path}/${currentPage - 1}`;
  const linkNext = `${path}/${currentPage + 1}`;
  const disablePrev = !!(currentPage === 1);
  const disableNext = !!(currentPage === numPages);

  return (numPages !== 1) ? (
    <div className={classnames(
      styles.pagination,
      className
    )}>
      <Link className={styles.link} to={linkPrev}>
        <Button className={styles.btn} disabled={disablePrev} caption='<'/>
      </Link>
      <Link className={styles.link} to={linkNext}>
        <Button className={styles.btn} disabled={disableNext} caption='>' />
      </Link>
    </div>
  ) : null;
};

export default Pagination;
