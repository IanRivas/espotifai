import mongoose from 'mongoose';
import config from './config/index.js';

mongoose
  .connect(config.DB)
  .then(() => console.log('DB is connected'))
  .catch((err) => console.error(err));
