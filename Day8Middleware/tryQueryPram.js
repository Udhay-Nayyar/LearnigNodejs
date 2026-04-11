express = require("express")
const app = express()


 const BookStore = [
    { id: 1, name: "Harry Potter", author: "DevFlux" },
    { id: 2, name: "Friends", author: "Vikas" },
    { id: 3, name: "Nexus", author: "Rohit" },
    { id: 4, name: "DSA", author: "Satya Sir" },
    { id: 5, name: "Love", author: "Udhay" }
];

app.get("/query",(req,res)=>{
    console.log(req.query.id)
    console.log(req.query.name)
    console.log(req.query.author)

    res.send("data recived now")
})


app.listen(6000, () => {
    console.log("i am runninG on port number 4000")
});