import express from 'express'
import { rohit, vivek } from '../controllers/sample.js';


const router = express.Router();

router.get("/vivek",vivek);

router .get("/rohit",rohit);

export default router;