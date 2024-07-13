const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

const connectDB = require("./config/database")
connectDB();

//start the server
app.listen(PORT, () => {
    console.log(`App started at Port no ${PORT}`); 
})

app.get("/", (req,res) => {
    res.send(`<h1>This is HomePage Baby</h1>`);
})