const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello world----get');
});

app.post('/',(req,res)=>{
    res.send('hello world---post');
});


app.listen(port,()=>{
    console.log(`http://localhost:${port} is runing`); 
});