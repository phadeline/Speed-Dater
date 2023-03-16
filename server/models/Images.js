const { Schema, model } = require("mongoose");

var imageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

const Images = model("Images", imageSchema);

module.exports = Images;
