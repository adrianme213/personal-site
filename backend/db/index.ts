import mysql from 'mysql';
import { SQL } from '../config/constants';

const db = mysql.createConnection({
  ...SQL,
});

db.connect((err: Error) => {
  if(err) {
    console.log(`MySQL - error connecting: ${err.stack}`);
    throw err;
  }
  console.log(`MySQL - connected as id: ${db.threadId}`);
})

export default db;
