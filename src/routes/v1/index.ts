import express, { type Request, type Response, type NextFunction } from 'express';
import appearancesRouter from './appearances'

const router = express.Router();

router.use('/appearances', appearancesRouter)

export default router