import { Table } from 'src/organisms/Table';

import { COLUMNS, DATA } from 'src/dummy/crm/participants.dummy.ts';

import { ParticipantsS } from './style.module.css';

export const ParticipantsT = ({ url }) => {
  return (
    <div className={ParticipantsS}>
      <Table
        url={url}
        rows={DATA}
        columns={COLUMNS}
      />
    </div>
  );
};
