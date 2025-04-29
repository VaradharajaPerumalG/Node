import express from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller';
const router = express.Router()


// R - For Reading
router.get('/', MovieIndex);

// C - For Creating 
router.post('/', MovieCreate);

// U - For Updating
router.put('/:id', MovieUpdate);

// D -  For Deleting
router.delete('/:id', MovieDelete);

export default router;