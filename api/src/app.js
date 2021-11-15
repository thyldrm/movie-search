const express = require("express")
const config = require("./config")
const cors = require('cors')
const routes = require("./routes")

const app = express();

config();

app.use(cors())
app.use(routes)

app.listen(process.env.APP_PORT, () => {
  console.log("Sunucu çalışıyor Port : ", `[${process.env.APP_PORT}]`)
})





