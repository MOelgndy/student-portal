import { useRouter } from 'next/router';

import { WORKING_ON } from 'src/data/shared/index.data';

import { WorkingOnS, pageNameS } from './style.module.css';

export const WorkingOn = ({ pageName = '', message = '' }) => {
  let { pathname } = useRouter();

  pathname = pathname.slice(1);

  return (
    <div className={WorkingOnS}>
      <h1 className={pageNameS}>{pageName || pathname}</h1>

      <h2>{message || WORKING_ON}</h2>
    </div>
  );
};
