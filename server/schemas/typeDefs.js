const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
  }
  type Bio {
    _id: ID!
    interests: [String]!
    bio: String
    age: Int
    gender: String
    location: String
    userId: ID!
    pictures: [String]
  }
  type Preference {
    _id: ID!
    ageMin: Int!
    ageMax: Int!
    sexOrientation: String!
    gender: String!
    location: String!
    userId: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  scalar Upload
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

  type Query {
    bios: [Bio]
    bio: Bio
    preferences: [Preference]
    preference: Preference
    me: User
    users: [User]
    connectionBio(userId: ID!): Bio
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBio(
      interests: String!
      bio: String!
      age: Int!
      gender: String!
      location: String!
      pictures: String
    ): Bio

    updateBio(
      interests: String
      bio: String
      location: String
      age: Int
      gender: String
      pictures: String
    ): Bio

    addPreference(
      ageMin: Int!
      ageMax: Int!
      sexOrientation: String!
      gender: String!
      location: String!
    ): Preference

    updatePreference(
      ageMin: Int
      ageMax: Int
      sexOrientation: String
      gender: String
      location: String
    ): Preference

    uploadFile(file: Upload!): File
  }
`;

module.exports = typeDefs;
