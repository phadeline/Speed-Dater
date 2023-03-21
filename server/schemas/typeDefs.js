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
    userID: User
  }
  type Preference {
    _id: ID!
    ageMin: Int!
    ageMax: Int!
    sexOrientation: String!
    gender: String!
    location: String!
    userID: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    bios: [Bio]
    bio(bioId: ID!): Bio
    preferences: [Preference]
    preference(preferenceId: ID!): Preference
    me: User
    users: [User]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addBio(
      interests: String!
      userId: ID!
      bio: String!
      age: Int!
      gender: String!
      location: String!
    ): Bio

    updateBio(bioId: ID!, interests: String!, bio: String!): Bio

    addPreference(
      ageMin: Int!
      ageMax: Int!
      sexOrientation: String!
      gender: String!
      location: String!
    ): Preference

    updatePreference(
      preferenceId: ID!
      ageMin: Int!
      ageMax: Int!
      sexOrientation: String!
      gender: String!
      location: String!
    ): Preference

    
  }
`;

module.exports = typeDefs;
