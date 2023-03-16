const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Bio {
    _id: ID!
    interests: String!
    bio: String
  }
  type Query {
    bios: [Bio]
    bio(bioId: ID!): Bio
  }
  type Mutation {
    addBio(interests: String!, bio: String!): Bio
    removeBio(bioId: ID!): Bio
    updateBio(bioId: ID!, interests: String!, bio: String!): Bio
  }
`;

module.exports = typeDefs;
