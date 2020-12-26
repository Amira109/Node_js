const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/user',(req,res)=>{
    var n=req.params[0];
    var m=req.params[1] ;
    res.send(n + ' ' + m) ;
}) ;


app.listen(3001,()=>{
   console.log('server running on port 3000'); 
});

