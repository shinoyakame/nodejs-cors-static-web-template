const express = require('express');
const cors = require('cors');
const app = express();
var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(express.static('public'))

app.listen(8080, ()=>{
    console.log('server start...');
});