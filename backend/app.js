const cors = require("cors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
}) // connect to MongoDB

const index = require("./routes/index")
const users = require("./routes/users")
const questions = require("./routes/questions")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", index)
app.use("/api/users", users)
app.use("/api/questions", questions)

module.exports = app
