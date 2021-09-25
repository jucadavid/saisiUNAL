const express = require("express")
const http = require("http")
const mongoose = require("mongoose")
const path = require("path")

// Import models
const Subject = require("./models/subjects.js")

mongoose.connect("mongodb://localhost:27017/saisiUNAL")

const port = 3000
const hostname = "0.0.0.0"
const viewsDir = "views"

const app = express();
app.use(express.static(path.join(__dirname, "static")))

app.get("/", function(req, res) {
    let subject = new Subject({id: "ID001", nombre: "Name of the subject", creditos: 3, programa: ["Program where the subject is being studied"]})
    subject.save()
    res.sendFile(path.join(__dirname, viewsDir, "index.html"))
})

app.listen(port)

console.log("The server is working: "+hostname+":"+port.toString())
