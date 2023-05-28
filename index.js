const express = require('express')

const app = express();
const port =3000;

app.use(express.static('public'));

app.listen(4000,()=>{
    console.log("Server is Started");
})