import React, { useCallback } from 'react'
import StackGrid from 'react-stack-grid'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { StackItem } from './StackItem'
import AddStackItem from './AddStackItem'

const GET_POSTS_QUERY = gql`
  {
    fetchAllPosts(requests: { cursor: { page: 0, limit: 10 } }) {
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

const StackComponent = () => {
  const { data, loading, error } = useQuery(GET_POSTS_QUERY)
  const handleOnDocumentBottom = useCallback(() => {
    console.log('I am at bottom! ' + Math.round(performance.now()))

      alert('Bottom hit!')
  }, [])
  useBottomScrollListener(handleOnDocumentBottom)


  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }



  const {
    fetchAllPosts: { data: allPosts }
  } = data
  console.log({ allPosts })
  return (
    <StackGrid columnWidth={200}>
      <AddStackItem/>
      {allPosts.map((post) => (
        <StackItem key={post._id} post={post} />
      ))}
    </StackGrid>
  )
}

export default StackComponent
