const express = require("express");
// const { CONNREFUSED } = require("node:dns");
// const { expectFailure } = require("node:test");
const BookStore = [
    { id: 1, name: "Harry Potter", author: "DevFlux" },
    { id: 2, name: "Friends", author: "Vikas" },
    { id: 3, name: "Nexus", author: "Rohit" },
    { id: 4, name: "DSA", author: "Satya Sir" },
    { id: 5, name: "Love", author: "Udhay" }
];

app = express()
app.use(express.json())

app.get("/data",(req,res)=>{
    res.send(BookStore)
})

////////////////////////////////////////////////////////////////////////
app.patch("/book",(req,res)=>{
    console.log(req.body)

    const book = BookStore.find(info => info.id === req.body.id)
    book.name = "Chirag"
    res.send("data has been updated");
});
////////////////////////////////////////////////////////////////////////
app.listen(4000, () => {
    console.log("i am runninG on port number 4000")
});