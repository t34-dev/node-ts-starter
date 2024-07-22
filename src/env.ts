import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  APP_NAME: process.env.APP_NAME || '—',
  NODE_ENV: process.env.NODE_ENV || '—',
};
