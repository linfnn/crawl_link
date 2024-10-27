const express = require('express')
require('dotenv').config()
const path = require('path');
const app = express()
const port = process.env.PORT

// Set views 
app.set('views', path.join(__dirname, 'views'))
// Set các tệp css,js đi kèm
app.use(express.static(path.join(__dirname, 'views')))
// Route for render static page
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => {
    // res.sendFile('index.html')
    console.log("App is listening at port: ", port)
})