import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      message
      user {
        id
        fullname
        email
        events {
          id
          title
          notes
          start
          end
          createdBy
        }
      }
    }
  }
`;

export const GETUSERDATA = gql`
  query GetUserData($token: String!) {
    getUserData(token: $token) {
      ok
      user {
        id
        fullname
        email
        events {
          id
          title
          notes
          start
          end
          createdBy
        }
      }
      token
      message
    }
  }
`;
