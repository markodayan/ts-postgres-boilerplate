import { DataSource } from 'typeorm';

const initDB = async () => {
  try {
    const connection = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'markodayan',
      password: undefined,
      database: 'tspostgres',
    });

    await connection.initialize();
    console.log('Connected to Postgres');
  } catch (err) {
    console.error(err);
    throw new Error('Unable to connect to db');
  }
};

initDB();
