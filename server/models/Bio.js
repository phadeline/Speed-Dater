const { Schema, model } = require("mongoose");

const bioSchema = new Schema({
  interests: [
    {
      type: String,
      required: true,
    },
  ],
  bio: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  location: { type: String, required: true },
  pictures: [{ type: String }],
});

const Bio = model("Bio", bioSchema);

module.exports = Bio;
