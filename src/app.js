require ("./database/initDB.js");
require("dotenv").config("../env");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware pour logger les requêtes
app.use(morgan("dev"));

// Middleware pour parser les requêtes
app.use(bodyParser.json());

// Routes
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");

// Définition des endpoints
app.use("/users", userRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
}
);

app.get("/", (req, res) => {
    res.send("Bienvenu sur notre superbe API !!");
});