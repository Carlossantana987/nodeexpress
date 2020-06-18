import { pool } from '../models/pools';
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable,
  insertUsers,
  createUsersTable,
  dropUsersTable
} from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropMessagesTable, dropUsersTable ]);
export const createTables = () => executeQueryArray([ createMessageTable, createUsersTable ]);
export const insertIntoTables = () => executeQueryArray([ insertMessages, insertUsers ]);
