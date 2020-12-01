const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [{name: "Mark"},{name: "Will"}]

app.get("/users",function(req,res){
    res.json({
        success: true,
        message: "Successfully got users. Nioce!",
        users: mockUserData
    })
})
app.get("/users/:id", function(req,res){
    console.log(req.params.id);
    res.json({
      success: true,
      message: "got one user",
      users: req.params.id
    })
})
app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="a";
    const mockPassword="b";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'r91h28u1289ru38'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})
app.listen(8000,function(){
    console.log("server is running");
})