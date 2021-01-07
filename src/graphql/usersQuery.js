import gql from 'graphql-tag'

export default gql`
query UsersQueryConnection($after: String, $orderBy: UserOrderByInput, $where: UserWhereInput, $first: Int, $skip: Int) {
  usersConnection(after: $after, orderBy: $orderBy, where: $where, first: $first, skip: $skip) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        email
        emailvalidated
        first_name
        last_name
        createdAt
        updatedAt
      }
    }
    aggregate {
          count
        }
        }
      }
    `
