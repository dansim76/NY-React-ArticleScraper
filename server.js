const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static("client/build"));
app.use(routes);
app.use(express.static("public"));

mongoose.connect(process.env.MongoDB_URI || "mongodb://localhost/nytreact");

app.listen(PORT,function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})