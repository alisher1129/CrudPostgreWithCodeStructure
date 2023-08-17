
const Router = require("./routes/useRoutes")
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./models")
app.use("/",Router)

app.listen(3000,()=>{
    console.log("Server is Running");
})