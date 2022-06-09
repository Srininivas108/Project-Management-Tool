const express = require("express");
const dotenv =require('dotenv');
const error =require ("./middlewares/errorMiddlewareHandler");
const usersRoute = require("./routes/usersRoute");
const projectRouter = require("./routes/projectRoutes");

dotenv.config();
require("./config/dbConnect")();



const app = express();

//passing body data
app.use(express.json());

//Routes
//users
app.use('/api/users',usersRoute);

//Projects
app.use('/api/projects',projectRouter);


//error middleware
app.use(error.errorMiddlewareHandler);



//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`);
});
