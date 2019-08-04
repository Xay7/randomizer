import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3001

app.use(morgan('dev'))
app.use(bodyParser.json())

app.listen(port, function () {
    console.log("Listening on port " + port)
})