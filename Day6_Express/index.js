const express = require("express");
const app = express();


app.use((req, res) => {
    res.send("baby mast hoo")
});



app.listen(4000,()=>{
    console.log("i am runninh on port number 4000")
});
