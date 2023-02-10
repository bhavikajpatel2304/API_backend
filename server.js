require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Import routes
// individual member routes
const routes_by_udit = require("./routes/udit/endpoint");
const routes_by_bhavika = require("./routes/bhavika/endpoint");
const routes_by_sagar = require("./routes/sagar/endpoint");
const routes_by_abhishek = require("./routes/abhishek/endpoint");
const routes_by_swaroop = require("./routes/swaroop/endpoint");

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

// Config options to pass in mongoose.connect() method
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Routes
//uncomment these routes once you add your apis
app.use("/uploads" , express.static(path.join(__dirname, "uploads")));
app.use("/udit", routes_by_udit);
// app.use("/bhavika", routes_by_bhavika);
// app.use("/abhishek", routes_by_abhishek);
// app.use("/sagar", routes_by_sagar);
app.use("/swaroop", routes_by_swaroop);

// home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome!</h1>
    `);
});

// Error handling route
app.all("*", (req, res) => {
    res.status(404).json({code: 404, message: 'Error 404! Route not found!'});
})

// mongodb connection
mongoose.set('strictQuery', false)
mongoose.connect( URL, options ).then((result) => {
    app.listen(PORT , (req , res) => {
        console.log(`Server has started successfully on port: ${PORT}`);
    })
})
.catch((err) => {
    console.log(`Server error -> ${err}`);
});