const mongoose = require("mongoose");

// connection to mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/speeddater",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
