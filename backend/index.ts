import express, { Application, Request, Response } from 'express';

import { PORT } from './config/constants';
import { userRouter } from './routes/index';


const app: Application = express();
/* Middlewares */
app.use(express.json());
app.use('/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  console.log(`GET  / - status code: ${req.statusCode}`);
  res.send('Hello World');
});

app.get('/home', (req: Request, res: Response) => {
  console.log(`GET  /home - status code: ${req.statusCode}`);
  res.send('home');
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
});
