const { AuthenticationError } = require("apollo-server-express");
const { User, Bio, Preference } = require("../models");
const { signToken } = require("../utils/auth");
const s3 = require("../config/s3config");
const { GraphQLUpload } = require("graphql-upload-minimal");

const resolvers = {
  Query: {
    me: async (_parent, _args, context) => {
      //needs args unless you are passing an parameter as the args. Context is the third parameter
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    bios: async () => {
      return Bio.find();
    },

    users: async () => {
      return User.find();
    },

    bio: async (_parent, context) => {
      if (context.user) {
        return Bio.findOne({ userId: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    connectionBio: async (_parent, { userId }, context) => {
      if (context.user) {
        return Bio.findOne({ userId: userId });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    preference: async (_parent, context) => {
      if (context.user) {
        return Preference.findOne({ userId: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Upload: GraphQLUpload,
  Mutation: {
    addUser: async (_parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addBio: async (
      _parent,
      { interests, bio, age, gender, location },
      context
    ) => {
      if (context.user) {
        const newBio = await Bio.create({
          interests,
          bio,
          userID: context.user._id,
          age,
          gender,
          location,
        });

        return newBio;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addPreference: async (
      _parent,
      { ageMin, ageMax, sexOrientation, gender, location },
      context
    ) => {
      if (context.user) {
        const newPreference = await Preference.create({
          ageMin,
          ageMax,
          sexOrientation,
          gender,
          location,
          userId: context.user._id,
        });
        return newPreference;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateBio: async (
      _parent,
      { interests, bio, age, gender, location },
      context
    ) => {
      if (context.user) {
        return await Bio.findOneAndUpdate(
          { userId: context.user._id },
          { $set: { interests, bio, age, gender, location } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updatePreference: async (
      _parent,
      { ageMin, ageMax, sexOrientation, gender, location },
      context
    ) => {
      if (context.user) {
        return await Preference.findOneAndUpdate(
          { userId: context.user._id },
          { $set: { ageMin, ageMax, sexOrientation, gender, location } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const { Location } = await s3
        .upload({
          Body: createReadStream(),
          Key: filename,
          ContentType: mimetype,
        })
        .promise();
      console.log(file);
      console.log(filename);
      return {
        // status: 200,
        filename,
        mimetype,
        encoding,
        url: Location,
      };
    },
  },
};

module.exports = resolvers;
