const mongoose = require("mongoose");

const connectDB = async () => mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

export default connectDB;
