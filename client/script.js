fetch('http://localhost:3001/user?name=amira',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

/*fetch('http://localhost:3001/user',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({
        user:{
            "name": "Amira_Almassri"
        }
        
    }) ,
 }).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})*/