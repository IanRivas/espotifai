import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import config from './config/index.js';
import artistasRoutes from './routes/artistas.routes.js';
import './mongodb.js';

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

app.get('/status', (req, res) => {
  res.status(200).send('OK');
});

app.use('/artistas', artistasRoutes);

app.all('/*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
