const { express } = require("express")
const http = require("http")

const port = 3000
const hostname = "0.0.0.0"

const app = express()

app.get("/", function(req, res) {
    console.log("Its working fine")
})


app.listen(port)

console.log("The server is working: "+hostname+":"+port.toString())
