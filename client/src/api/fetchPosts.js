// @ts-ignore
import { graphql, gql } from 'react-apollo'

const fetchPostsQuery = gql`
{
  fetchAllPosts {
    success
    data {
      _id
      name
      description
      createdAt
    }
    error {
      status
      message
    }
  }
}
`
export default fetchPostsQuery
