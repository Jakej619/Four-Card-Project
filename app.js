

const express= require("express");
const app = express();


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
})











app.listen(process.env.PORT, function() {
    console.log("Sever is running");
})