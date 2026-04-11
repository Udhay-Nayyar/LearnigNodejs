//add the data 
express = require("express")
const app = express()

app.use(express.json())
const BookStore = [
    { id: 1, name: "Harry Potter", author: "DevFlux" },
    { id: 2, name: "Friends", author: "Vikas" },
    { id: 3, name: "Nexus", author: "Rohit" },
    { id: 4, name: "DSA", author: "Satya Sir" },
    { id: 5, name: "Love", author: "Udhay" }
];

app.get("/data",(req,res)=>{
    res.send(BookStore)
})


app.put("/data",(req,res) =>{
    console.log(req.body)
    res.send("data have been uploaded successfully")
    const obj ={id : req.body.id , name : req.body.name , author : req.body.author};
    BookStore.push(obj);
})


app.listen(8000, () => {
    console.log("i am running on port number 8000")
});