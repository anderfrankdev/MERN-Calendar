import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Mutation($fullname: String!, $email: String!, $password: String!) {
    createUser(fullname: $fullname, email: $email, password: $password) {
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

export const CREATE_EVENT = gql`
mutation CreateEvent($title: String!, $start: String!, $end: String!, $token: String!, $notes: String) {
  createEvent(title: $title, start: $start, end: $end, token: $token, notes: $notes) {
    ok
    message
  }
}
`;