const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      process.env.MONGODB_URL,
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};
module.exports= dbConnect;



//mongodb://localhost:27017



//root
//qEBg5U8EjKNrwgUM

