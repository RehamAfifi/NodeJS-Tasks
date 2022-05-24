require("dotenv").config()
const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express()
app.set("view engine", "hbs")

app.use(express.static(path.join(__dirname, "../resources/public")))
app.set("views", path.join(__dirname, "../resources/views"))
hbs.registerPartials(path.join(__dirname, "../resources/layouts"))

const userRoutes = require('../routes/user.routes')
app.use(userRoutes)

module.exports = app