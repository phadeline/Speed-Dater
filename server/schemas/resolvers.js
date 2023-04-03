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
        return User.findOne({ _id: context.user._id })
          .populate({ path: "connections", select: "-__V" })
          .populate({ path: "connectRequest", select: "-__V" });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    connection: async (_parent, { userId }, context) => {
      if (context.user) {
        return User.findOne({ _id: userId });
      }
      throw new AuthenticationError(
        "You need to be logged in to view another profile!"
      );
    },
    bios: async () => {
      return Bio.find().populate("userId");
    },

    users: async () => {
      return User.find();
    },

    bio: async (_parent, args, context) => {
      if (context.user) {
        return await Bio.findOne({ userId: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    connectionBio: async (_parent, { userId }, context) => {
      if (context.user) {
        return Bio.findOne({ userId: userId });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    preference: async (_parent, args, context) => {
      if (context.user) {
        return await Preference.findOne({ userId: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    connectionPreference: async (_parent, { userId }, context) => {
      if (context.user) {
        return await Preference.findOne({ userId: userId });
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
      { interests, bio, age, gender, location, pictures },
      context
    ) => {
      if (context.user) {
        const newBio = await Bio.create({
          interests,
          bio,
          userId: context.user._id,
          age,
          gender,
          location,
          pictures,
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
    addConnection: async (_parent, { userId }, context) => {
      if (context.user) {
        const addConnection = await User.findOneAndUpdate(
          { _id: userId },
          {
            $push: { connectRequest: context.user._id },
          },
          { new: true }
        );
        return addConnection;
      }
      throw new AuthenticationError(
        "You need to be logged in to add a connection"
      );
    },
    acceptConnection: async (_parent, { userId }, context) => {
      if (context.user) {
        const newConnect = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { connections: userId } },
          { new: true }
        );
        const newConnect2 = await User.findOneAndUpdate(
          { _id: userId },
          { $push: { connections: context.user._id } },
          { new: true }
        );
        const deleteRequest = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { connectRequest: userId } },
          { new: true }
        );
        return {
          newConnect,
          newConnect2,
          deleteRequest,
        };
      }
      throw new AuthenticationError(
        "You need to be logged in to edit connections"
      );
    },
    deleteConnectionRequest: async (_parent, { userId }, context) => {
      if (context.user) {
        const deleteConnectionRequest = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { connectRequest: userId },
          },
          { new: true }
        );
        return deleteConnectionRequest;
      }
      throw new AuthenticationError(
        "You need to be logged in to edit connections"
      );
    },
    deleteConnection: async (_parent, { userId }, context) => {
      if (context.user) {
        const delConnection1 = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { connections: userId },
          },
          { new: true }
        );
        const delConnection2 = await User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: { connections: context.user._id },
          },
          { new: true }
        );
        return {
          delConnection1,
          delConnection2,
        };
      }
      throw new AuthenticationError(
        "You need to be logged in to edit connections"
      );
    },
    updateBio: async (
      _parent,

      { interests, bio, age, gender, location, pictures },
      context
    ) => {
      if (context.user) {
        return await Bio.findOneAndUpdate(
          { userId: context.user._id },
          { $set: { interests, bio, age, gender, location, pictures } },
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
    uploadFile: async (_parent, { file }, context) => {
      if (context.user) {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const { Location } = await s3
          .upload({
            Body: createReadStream(),
            Key: filename,
            ContentType: mimetype,
          })
          .promise();
        await Bio.findOneAndUpdate(
          { userId: context.user._id },
          { $push: { pictures: Location } },
          { new: true }
        );
        return {
          filename,
          mimetype,
          encoding,
          url: Location,
        };
      }
    },
  },
};

module.exports = resolvers;
