import { Link } from 'src/atoms/Link';
import { WorkingOn } from 'src/atoms/WorkingOn';

import { HomeS } from './style.module.css';

export const HomeT = () => {
  return (
    <div className={HomeS}>
      <Link
        variant='text'
        href='/crm/participants'
      >
        Participants
      </Link>
      <br />

      <Link
        variant='text'
        href='/crm/leads'
      >
        leads
      </Link>

      <WorkingOn pageName='Home Page' />
    </div>
  );
};
