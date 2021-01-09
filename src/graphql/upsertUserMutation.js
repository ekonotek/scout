import gql from 'graphql-tag'

export default gql`
  mutation UpsertUserMutation($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    upsertUser(data: $data, where: $where, create: $create) {
      id
      first_name
      last_name
      email
      role
      nameFile
    }
  }
`