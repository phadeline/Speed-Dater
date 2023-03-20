const { Schema, model } = require("mongoose");

const bioSchema = new Schema({
  interests: [
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20,
    },
  ],
  bio: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  location: { type: String, required: true },
 
});

const Bio = model("Bio", bioSchema);

module.exports = Bio;
