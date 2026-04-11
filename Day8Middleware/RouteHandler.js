//what is middleware
// maintain logs 
// whhat are the benifits of using this middle ware or routing handler 


const express = require("express")
const app = express();

// app.get("/data", (req, res , next) => {
//     console.log("first")
//     // res.send("first")
//     next()
// })

// app.get("/data", (req, res) => {
//     // res.send("second")
//     console.log("second")
// })

// app.get("/data", (req, res) => {
//     // res.send("third")
//     console.log("third")

// })

// app.get("/data", (req, res) => {
//     // res.send("fourth")
// })

// ----------------------------------------------------------------------------------


// app.get("/data", (req, res, next) => {
//     console.log("A")
//     next()
// })

// app.get("/data", (req, res, next) => {
//     console.log("B")
//     next()
// })

// app.get("/data", (req, res, next) => {
//     console.log("C")
//     next()
// })

// app.get("/data", (req, res) => {
//     console.log("D")
//     res.send("E")
// })

// ----------------------------------------------------------------------------------

app.get("/data", (req, res, next) => {
    console.log("A")
    next()
    console.log("B")
})

app.get("/data", (req, res, next) => {
    console.log("C")
    next()
    console.log("D")
})

app.get("/data", (req, res) => {
    console.log("E")
    res.send("F")
    console.log("G")
})


//guess the output - ACEGDB   
app.listen(5000, () => {
    console.log("i am runninG on port number 5000")
});