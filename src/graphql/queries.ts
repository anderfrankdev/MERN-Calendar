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
