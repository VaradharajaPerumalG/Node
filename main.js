const express =  require('express')
const app = express()
const PORT = 6969 

app.get("/", (req, res) => {
    res.json({msg: "Hello students!"});
});

// CRUD functionality 

// R - For Reading
app.get('/movies', () => {

});

// C - For Creating 
app.post('/movies', () =>{

});

// U - For Updating
app.put('/movie/:id', () => {

});

// D -  For Deleting
app.delete('/movie/:id', () => {

});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:6969`);
});
