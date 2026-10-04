import express, { type Express, type Request, type Response } from 'express';
import v1 from './routes/v1'

const app: Express = express();

app.use('/v1', v1); 

app.listen(3000);