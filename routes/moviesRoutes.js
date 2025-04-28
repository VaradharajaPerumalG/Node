import express from 'express'
const router = express.Router()
// R - For Reading
router.get('/', (req, res) => {
    res.send("Get all movie lists")
});

// C - For Creating 
router.post('/', (req, res) =>{
    res.send("Create a movie")
});

// U - For Updating
router.put('/:id', (req, res) => {
    res.send("Update a movie")
});

// D -  For Deleting
router.delete('/:id', (req, res) => {
    res.send("delete a movie")
});

export default router;