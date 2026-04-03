const http = require("http")
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.end("hello Nayyar sweets")
    }
    else if (req.url == "/contact") {
        res.end("this is the contact page")
    }
    else if (req.url == "/about") {
        res.end("this is the about page of the server")
    }
    else {
        res.end("Error")
    }
})


server.listen(4000, () => {
    console.log("I am listning at 4000 port number")
})