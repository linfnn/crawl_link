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









// // Cấu hình thư mục views
// app.set('views', path.join(__dirname, 'views'));
// // Cấu hình để gửi file tĩnh từ thư mục public
// app.use(express.static(path.join(__dirname, 'views')));
// // Route để render file HTML từ thư mục views
// app.get('/', (req, res) => {
//     res.sendFile('index.html');  // Giả sử bạn có file views/index.ejs
// });
app.listen(port, () => console.log("App is listening at port: ", port))