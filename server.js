const express = require('express');
const app = express();
const port = 5000
app.get('/', (req, res) => res.send('hello yuki'))

app.listen (port,() =>  console.log("server started !"))
