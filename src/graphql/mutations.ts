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
    event{
      id
    }
  }
}
`;
export const DELETE_EVENT = gql`
mutation DeleteEvent($token: String!, $eventId: String!) {
  deleteEvent(token: $token, eventId: $eventId) {
    ok
    message
  }
}
`;
export const EDIT_EVENT = gql`
mutation UpdateEvent($token: String!, $id: String!, $title: String, $notes: String, $start: String, $end: String) {
  updateEvent(token: $token, id: $id, title: $title, notes: $notes, start: $start, end: $end){
    ok
    message
  }
}
`;
export const REFRESH_JWT = gql`
mutation RefreshJwt($token: String!) {
  refreshJwt(token: $token) {
    token
    ok
  }
}
`;
