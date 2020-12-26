const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
 
app.get('/user',(req,res)=>{
    const data = req.param('name') ;
    res.json({message :"hello "+ '' + data}) ;
}) ;
/*app.post('/user',(req,res)=>{
    res.json({message:"hello" +''+ req.body.user.name) ;
}) ;*/



app.listen(3001,()=>{
   console.log('server running on port 3001'); 
});

