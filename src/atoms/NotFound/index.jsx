import { Link } from 'src/atoms/Link';

import { NotFoundS, notFound } from './style.module.css';

import { BACK_TO_HOME, NOT_FOUND } from '../../data/shared/index.data';

export const NotFound = ({ redirectHref = '/', title = BACK_TO_HOME }) => {
  return (
    <div className={NotFoundS}>
      <h2 className={notFound}>{NOT_FOUND}</h2>

      <Link
        title={title}
        href={redirectHref}
        variant='text'
      >
        {title}
      </Link>
    </div>
  );
};
