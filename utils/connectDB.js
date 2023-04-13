const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("ahmed kechicheb");
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

export default connectDB;
