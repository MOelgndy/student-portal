import { useCallback, useEffect, useState } from 'react';

import styles from './style.module.css';

//TODO: change from relative to absolute path
import { callAPI } from '../../helpers/callAPI';
import { MethodTypes } from '../../types/RestApis';

type Row = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  date: string;
  program: string;
};

type Column = {
  id: string;
  name: string;
  value: string;
  sortable: boolean;
  pinned: boolean;
};

type Props = {
  url: string;
  columns: Column[];
  rows: Row[];
};

export const Table = ({ url, columns, rows }: Props) => {
  const { TableS } = styles;

  const [, setTableData] = useState([]);

  const getTableData = useCallback(async () => {
    //?? I don't want to send the prams in an object
    //?? Is there another way?
    const { results } = await callAPI({
      url,
      method: MethodTypes.GET,
      token: process.env.NEXT_PUBLIC_TOKEN,
    });

    setTableData(results);
  }, [url]);

  useEffect(() => {
    getTableData();
  }, [getTableData]);

  const columnsList = columns.map((column: Column) => (
    <th key={column.id}>{column.value}</th>
  ));

  const rowsList = rows.map((row) => {
    const rowDataList = columns.map((column: Column) => (
      // @ts-ignore
      <td key={row.id + column.id}>{row[column.name]}</td>
    ));

    return (
      <tr key={row.id}>
        <td>Select box</td>

        {rowDataList}

        <td>Edit and delete</td>
      </tr>
    );
  });

  return (
    <div className={TableS}>
      <table>
        <thead>
          <tr>
            <th>select</th>

            {columnsList}

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{rowsList}</tbody>
      </table>
    </div>
  );
};
