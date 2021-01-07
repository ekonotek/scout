import gql from 'graphql-tag'

// export default gql`
//   query AllDates {
//     allDates {
//       id
//       date
//     }
//   }
// `

export default gql`
query UsersQueryConnection($after: String, $orderBy: UserOrderByInput, $where: UserWhereInput, $first: Int, $skip: Int) {
  usersConnection(after: $after, orderBy: $orderBy, where: $where, first: $first, skip: $skip) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        role
        email
        first_name
        last_name
        validateEmailToken
      }
    }
    aggregate {
          count
        }
        }
      }
    `
