import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const CREATE_POST_QUERY = gql`
  mutation createPost($post: createPostInputData) {
    createPost(request: { data: $post }) {
      success
      data {
        _id
        name
        description
        createdAt
        author {
          name
        }
      }
      error {
        status
        message
      }
    }
  }
`
function useAddPosts() {
  return useMutation(CREATE_POST_QUERY, {
    refetchQueries: ['fetchAllPosts']
  })
}
export default useAddPosts
