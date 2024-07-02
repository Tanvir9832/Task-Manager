const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const httpStatus = require("http-status");
// const globalErrorHandler = require("./app/middlewares/globalErrorHandler");
// const routes = require("./app/routes/index");

// require('dotenv').config()

const app = express();

//{ origin: "http://localhost:3000", credentials: true }
app.use(cors());
// app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes.applicationRoutes(app);


// //handle not found
// app.use((req, res, next) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "Not Found",
//     errorMessages: [
//       {
//         path: req.originalUrl,
//         message: "API Not Found",
//       },
//     ],
//   });
//   next();
// });

// app.use(globalErrorHandler);

app.get("/",(req,res)=>{
    res.send("Hello");
})


module.exports = app;