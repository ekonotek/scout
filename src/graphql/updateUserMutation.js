import gql from 'graphql-tag'

export default gql`
  mutation UpdateUserMutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
      first_name
      last_name
      email
      role
      nameFile
    }
  }
`