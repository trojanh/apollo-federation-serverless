import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_POSTS_QUERY = gql`
  query fetchAllPosts($cursor: fetchAllPostsInput) {
    fetchAllPosts(requests: $cursor) {
      success
      hasMore
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
function usePosts(limit) {
  const { data, loading, fetchMore } = useQuery(GET_POSTS_QUERY, {
    variables: {
      cursor: {
        cursor: { page: 0, limit }
      }
    }
  })
  if (loading) return { loading, posts: [] }

  const loadMore = (page) => {
    return fetchMore({
      query: GET_POSTS_QUERY,
      variables: {
        cursor: {
          cursor: { page, limit }
        }
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          ...fetchMoreResult,
          fetchAllPosts: {
            ...fetchMoreResult.fetchAllPosts,
            data: [
              ...previousResult.fetchAllPosts.data,
              ...fetchMoreResult.fetchAllPosts.data
            ]
          }
        }
      }
    })
  }
  return {
    posts: data.fetchAllPosts.data,
    hasMore: data.fetchAllPosts.hasMore,
    loading,
    loadMore
  }
}
export default usePosts
