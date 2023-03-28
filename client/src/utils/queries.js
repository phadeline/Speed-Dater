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
query getBio{
    myBio{
        _id
        bio
        interests
        userId
        age
        gender
        location
    }
}`

export const QUERY_PREFERENCE = gql`
query getPreference{
    myPreference{
        _id
        ageMin
        ageMax
        sexOrientation
        gender
        location
        userId
    }
}`