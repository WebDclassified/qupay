const express = require("express")
const rootRpiter = require("../backend/routes/index")

const app = express()

app.use("/api/v1", rootRouter)


