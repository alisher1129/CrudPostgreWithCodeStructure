
const Router = require("./routes/useRoutes")
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",Router)
require("./models")

app.listen(3000,()=>{
    console.log("Server is Running");
})