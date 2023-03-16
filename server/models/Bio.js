const { Schema, model } = require("mongoose");

const bioSchema = new Schema({
  interests: [
    {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
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
});

const Bio = model("Bio", bioSchema);

module.exports = Bio;
