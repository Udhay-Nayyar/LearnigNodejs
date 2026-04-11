const express = require("express");
const { expectFailure } = require("node:test");
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


/// what if i want only one book information 

app.get("/data/:id",(req,res)=>{
    const id = parseInt(req.params.id)

    const bookInfo = BookStore.find(info => info.id === id)
    res.send(bookInfo)
})

app.post("/data",(req,res)=>{
    // res.send("data has been saved successfully ")
    BookStore.push(req.body)
    res.send(BookStore)
});


app.listen(4000, () => {
    console.log("i am runninh on port number 4000")
});