import express from 'express';
import { cadastrarAutonomo, listarAutonomos } from '../controllers/AutonomoController.js';

const router = express.Router();

router.post('/', cadastrarAutonomo);
router.get('/', listarAutonomos);

export default router;