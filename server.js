const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5012;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/database");

const app = express();

connectDB();

// VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE-- //
// TO ALLOW THE BODY OF A POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// USE ROUTES/USERROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/USERS
app.use("/api/users", require("./routes/userRoutes"));
// USE ROUTES/BLOGROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/BLOGS
app.use("/api/blogs", require("./routes/blogRoutes"));
// USE ROUTES/COMMENTROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/COMMENTS
app.use("/api/blogs/comments", require("./routes/commentRoutes"));
// USE ROUTES/LIKESROUTES TO HANDLE ANY ENDPOINTS THAT END WITH /API/LIKES
app.use("/api/likes", require("./routes/likesRoutes"));

// HANDLING ERRORS AND ASSOCIATED MESSAGES
app.use(errorHandler);

// HOME PAGE
app.get("/", (req, res) => {
    res.render("HomePage");
});

// CURRENTBLOG PAGE
app.get("/blog", (req, res) => {
    res.render("CurrentBlog");
});

// LOGIN PAGE
app.get("/sign-in", (req, res) => {
    res.render("Login");
});

// REGISTER PAGE
app.get("/sign-up", (req, res) => {
    res.render("Register");
});

app.listen(PORT, () => {
    console.log(`The dev^2 server is currently running on port ${PORT}!`);
});