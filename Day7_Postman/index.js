const express = require("express");
const app = express();



// app.use("/contact",(req, res) => {
//     res.send("contact page")
// });

// app.use("/",(req, res) => {
//     res.send("baby mast hoo")
// });
app.use(express.json()) // parsing 
app.get("/user", (req, res) => {
    res.send({ name: 'rohit' })
})

app.post("/user",
    (req, res) => {
        console.log(typeof req.body.age)
        res.send("data has been sended to the backend")
    }
)


app.listen(4000, () => {
    console.log("i am runninh on port number 4000")
});
