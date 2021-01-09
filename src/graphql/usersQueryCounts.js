import gql from "graphql-tag";

export default gql`
  fragment UserData on UserConnection {
    edges {
      node {
        id
        role
        email
        emailvalidated
        first_name
        last_name
      }
    }
    aggregate {
      count
    }
  }
  query Everyone {
    Admins: usersConnection(where: { role: ADMIN }) {
      ...UserData
    }
    Users: usersConnection(where: { role: USER }) {
      ...UserData
    }
    Gallery_Owners: usersConnection(where: { role: OWNER_MANAGER }) {
      ...UserData
    }
    Agency_Principals: usersConnection(where: { role: DEALER }) {
      ...UserData
    }
    Artists: usersConnection(where: { role: ARTIST }) {
      ...UserData
    }
  }
`;
