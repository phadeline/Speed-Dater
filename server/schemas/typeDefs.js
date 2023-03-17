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
  }
  type Preference {
    _id: ID!
    ageMin: Int!
    ageMax: Int!
    sexOrientation: String!
    gender: String!
    location: String!
    
  }
  type Query {
    bios: [Bio]
    bio(bioId: ID!): Bio
    preferences: [Preference]
    preference(preferenceId: ID!): Preference
  }
  type Mutation {
    addBio(interests: String!, bio: String!, age: Int, gender: String, location: String): Bio
    removeBio(bioId: ID!): Bio
    updateBio(bioId: ID!, interests: String!, bio: String!): Bio
    addPreference(ageMin: Int!, ageMax: Int!, sexOrientation: String!, gender: String!, location: String!): Preference
    updatePreference(preferenceId: ID!, ageMin: Int!, ageMax: Int!, sexOrientation: String!, gender: String!, location: String!): Preference

  }
`;

module.exports = typeDefs;
