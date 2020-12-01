const express = require('express');
const app = express();

const mockUserData = [{name: "Mark"},{name: "Will"}]

app.get("/users",function(req,res){
    res.json({
        success: true,
        message: "Successfully got users. Nioce!",
        users: mockUserData
    })
})
app.listen(8000,function(){
    console.log("server is running");
})