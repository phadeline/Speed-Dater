const { Schema, model } = require("mongoose");

const preferenceSchema = new Schema({
    ageMin: {
        type: Number,
        required: true,
    },
    ageMax: {
        type: Number,
        required: true,
    },
    sexOrientation: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Preference = model("Preference", preferenceSchema);

module.exports = Preference;