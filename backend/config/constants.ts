export const PORT = process.env.PORT || 3000;

export const SQL = {
  host: process.env.SQL_HOST || 'localhost',
  user: process.env.SQL_USER || 'root',
  password: process.env.SQL_PASSWORD || 'mysql',
  database: process.env.SQL_DATABASE || 'personal_site',
  port: process.env.SQL_PORT || 3306
};
