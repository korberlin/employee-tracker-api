import express from 'express';
import { apiController } from '../controllers/apiController';

const router = express.Router();

router.get('/', apiController.get);

export default router;