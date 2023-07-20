require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
const assos = require('./assos');

app.get('/', (req, res) => {
    res.send("Welcome to the assos list");
  });

app.get('/assos', assos.getAssos )
app.get('/assos/first', assos.getFirstAssoWithItsCat)
app.get('/assos/:cat_id', assos.getAssosByCategory)


app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });