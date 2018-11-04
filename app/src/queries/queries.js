import gql from 'graphql-tag'

const LOGIN_TODOS = gql`
    mutation Login($email: String, $password: String) {
        login(email: $email, password: $password) {
        id
        email
        }
    }
  `

const FETCH_CURRENT_USER = gql`
{
  user {
        id
    email
  }
}
`;

export {
    LOGIN_TODOS,
    FETCH_CURRENT_USER
}
