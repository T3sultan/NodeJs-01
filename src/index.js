const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Node Js Assignment three")
})
app.listen(8080, ()=>{
    console.log("Server listing on port 8080");
})