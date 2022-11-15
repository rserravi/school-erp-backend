require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3001;
const {initClientDbConnection} = require("./src/helpers/dbConnection")

//API SECURITY
//app.use(helmet());
 
//HANDLE CORS ERROR
app.use(cors());

   
//LOGGER
app.use(morgan("tiny"));    


// SET BODY PARSER
 
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

//Load Routers
const userRouter = require("./src/routers/user.router");
const tokensRouter = require("./src/routers/tokens.router");
const equipmentRouter = require("./src/routers/equipment.router");
const classroomRouter = require("./src/routers/classroom.router")
const subjectRouter = require("./src/routers/subject.router")
const personRouter = require("./src/routers/person.router")

 
//USE ROUTERS
app.use("/v1/user", userRouter);
app.use("/v1/tokens", tokensRouter);
app.use("/v1/equipment", equipmentRouter);
app.use("/v1/classroom", classroomRouter);
app.use("/v1/subject", subjectRouter)
app.use("/v1/person",personRouter)


//Error handler
const handleError = require("./src/utils/errorHandler");
 
app.use("*", (req,res, next) =>{
   const error = new Error("Resources not found");
   error.status = 404;
   next(error) // send the error to the next router (app.use)
});
 
app.use((error, req, res, next) =>{
   handleError(error, res);
})
 
app.use("/", (req,res) =>{
   res.json({ message: "Hi there!"});
});

//MongoDB CONNECTION
global.clientConnection = initClientDbConnection();

 
app.listen(port, () =>{
   console.log("API is ready on https://localhost:${port}");
});
