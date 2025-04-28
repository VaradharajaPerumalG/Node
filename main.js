import movieRoutes from "./routes/moviesRoutes.js"
import express from 'express'
const app = express()
const PORT = 6969 

app.get("/", (req, res) => {
    res.json({msg:"Hello students!"});
});

// CRUD functionality 
//CLIENT -> MIDDLEWARE -> SERVER
// CRUD functionality
app.use('/movies', movieRoutes)

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:6969`);
});