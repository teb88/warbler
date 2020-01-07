process.env.SECRET_KEY || require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./handlers/error");
const { authRoutes, messageRoutes } = require("./routes");

app.use(cors())
app.use(bodyParser.json())

// routes here
app.use("/api/auth", authRoutes)
app.use("/api/user/:id/messages", messageRoutes)

app.use(notFound, errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log("connected on port " + PORT))


