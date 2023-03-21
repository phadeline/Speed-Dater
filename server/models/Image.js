const { Schema, model } = require("mongoose");

var imageSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
