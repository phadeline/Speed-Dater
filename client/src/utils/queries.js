import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getUser {
    me {
      _id
      username
    }
  }
`;

export const QUERY_BIO = gql`
  query getBio {
    bio {
      _id
      bio
      interests
      userId
      age
      gender
      location
      pictures
    }
  }
`;

export const QUERY_PREFERENCE = gql`
  query getPreference {
    preference {
      _id
      ageMin
      ageMax
      sexOrientation
      gender
      location
      userId
    }
  }
`;
