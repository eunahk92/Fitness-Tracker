const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || process.env.EXPRESS_PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.use(require("./routes/api.js"));

app.listen(PORT, () => console.log(`App running on localhost:${PORT}`));